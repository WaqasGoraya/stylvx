import permissionsModel from "../models/permissions.js";
import rolesModel from "../models/roles.js";
import userModel from "../models/users.js";
import bcrypt from "bcrypt";
import generateTokens from "../utils/generateTokens.js";
import { populate } from "dotenv";
import TokenCookies from "../utils/setTokenCookies.js";
import refreshAccessToken from "../utils/refreshAccessToken.js";
import refreshTokenModel from "../models/userrefreshToken.js";
import jwt from 'jsonwebtoken';
import transporter from "../config/mailConfig.js";
class userController {
    static userRegistration = async (req,res) => {
        try {
            const {firstname, lastname ,email, password, password_confirm} = req.body;
            // Check all fields are provided
            if(!firstname || !lastname || ! email || !password || !password_confirm){
                return res.status(200).json({status: "Failed", message: "All fields are required!"});
            }else{
                // Check email is unique
                const emailExists = await userModel.findOne({ email: email });
                // return false;
                if(emailExists){
                return res.status(200).json({status: "Failed", message: "Email already exist!"});
                }
                // Check Password Confirmation
                if(password !== password_confirm){
                    return res.status(200).json({status: "Failed", message: "Password and Confirm Password does'nt match!"});
                }
                // Generate password Hash
                const hashPassword = await bcrypt.hash(password,10);

                // roles
                const userRole = await rolesModel.findOne({name: 'user'});
                //  Save New User into DB
                const newUser = await new userModel({firstname,lastname, email, password:hashPassword,role: userRole._id}).save();

                return res.status(201).json({
                    status: "Success",
                    message: "User registerd success",
                    user: {id: newUser._id, firstname: newUser.firstname, lastname: newUser.lastname, email: newUser.email}
                });

            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ 
                status: "Failed", 
                message: "Unable to register Please try again!",
                error: error
            });
        }
      
    }
    static userLogin = async (req,res) => {
        try {
            const {email, password} = req.body;
            if(!email || !password){
                return res.status(200).json({
                    status: "Failed",
                    message: "All Fields are required"
                });
            }
            const user = await userModel.findOne({ email: email}).populate({
                path: 'role',
                populate:{
                    path: 'permissions',
                    model: permissionsModel
                }
            });
            if(!user){
                return res.status(200).json({
                    status: "Failed", 
                    message: "Invalid email or password."
                });
            }
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(200).json({ status: "Failed", message: "Invalid email or password." });
            }
            // .Generate Token
            const {accesstoken, refreshtoken }  =  await generateTokens(user);

            // Set Cookies
            TokenCookies(res,accesstoken,refreshtoken);

            // Send success response with tokens
            res.status(200).json({
                status: "Success",
                message: "Login Successfull",
                user: {
                    id: user._id,
                    email: user.email,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    role: user.role.map(role => ({
                        id: role._id,
                        name: role.name,
                        permissions: role.permissions.map(permission => ({
                          id: permission._id,
                          name: permission.name
                        }))
                      }))
                },
                accesstoken: accesstoken,
                refreshtoken: refreshtoken,
                is_auth: true
            });

        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: "Failed",
                message: "Unable to Login Please try again!"
            });
        }
    }
    // get new access token or refresh token
    static getNewAccessToken = async(req,res) => {
           try {
             
            // Get New access token using refresh token
            const {newAccessToken, newRefreshToken} =  await refreshAccessToken(req,res);
           
            // set new access token to cookies
            TokenCookies(res,newAccessToken,newRefreshToken);
            
                // Send success response with tokens
                res.status(200).json({
                    status: "Success",
                    message: "New Token generated",
                    accesstoken: newAccessToken,
                    refreshtoken: newRefreshToken,
                });

            } catch (error) {
            console.log(error)
             res.status(500).json({
                status:"Failed",
                message: "Unable to generate token"
             })
           }
    }
    // User profile 
    static userProfile = async(req,res)=> {
        try {
            const user =  req.user;
            res.status(200).json({
                status: "Success",
                message: "user find",
                user: req.user
            })
        } catch (error) {
            return res.status(500).json({
                status: "Failed",
                message: "Cannot get user"
            });
        }
    }

    // Logout
    static userLogout = async (req,res) => {
        try {
            const refreshToken = req.cookies.refreshToken;
            await refreshTokenModel.findOneAndUpdate({
                token: refreshToken
            });
                 // Clear access token and refresh token cookies
                res.clearCookie('accessToken');
                res.clearCookie('refreshToken');
                res.status(200).json({ status: "success", message: "Logout successful" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: "failed", message: "Unable to logout, please try again later" });
        }
    }
    // Send reset password email
    static sendResetPasswordEmail = async (req,res) => {
        try {
            const {email} = req.body;
            if(!email){
               return res.status(400).json({
                    status: "Failed",
                    message: "Email is required"
                });
            }
            // Find user by email
            const user = await userModel.findOne({email});
            if(!user){
                return res.status(200).json({ status: "Failed", message: "Invalid Email"}); }
            const token = jwt.sign({userId: user._id}, process.env.JWT_ACCESS_TOKEN_SECRET, {expiresIn: '15m'});
            // Generate link for reset password
            const link = `${req.protocol}://${process.env.FRONTEND_HOST}/reset-password-confirm/${user._id}/${token}`;
            // Send Email
            await transporter.sendMail({
                from: process.env.EMAIL_FROM, // sender address
                to: user.email, // list of receivers
                subject: "Reset Password Link✔", // Subject line
                html: `<p>Hello ${user.username},</p><p>Please <a href="${link}">click here</a> to reset your password.</p>`
              });
              // Send success response
            return res.status(200).json({ status: "success", message: "Password reset email sent. Please check your email." });
        } catch (error) {
            console.error(error)
           return res.status(500).json({
                status: "Failed",
                message: "Unable to send email please try again!"
            })
        }
    } 
    static userPasswordReset = async(req,res) => {
        try {
            const {password,password_confirm} = req.body;
            const {id,token} = req.params;

            // Check if password and password_confirmation are provided
            if (!password || !password_confirm) { return res.status(200).json({ status: "failed", message: "New Password and Confirm New Password are required" })}
            
            // Check if password and password_confirmation match
            if(password !== password_confirm){ return res.status(200).json({ status: "Failed", message: "Password and Confirm Password not match" })}
           
            // Find user by id
            const user = await userModel.findOne({_id:id});
            if(!user){ return res.status(200).json({ status: "Failed",message: "User not found" })}
            // secert
            const secret =  process.env.JWT_ACCESS_TOKEN_SECRET
            // Validate token
            jwt.verify(token,secret);
            // Set new password
            const newPassword = await bcrypt.hash(password,10);
            // Update user
            await userModel.findByIdAndUpdate(id, {password: newPassword});
            // Send success response
            res.status(200).json({ status: "success", message: "Password reset successfully" });
        } catch (error) {
            console.log(error)
            if(error.name === "TokenExpiredError"){
                return res.status(400).json({ status: "failed", message: "Password reset link expired. Please generate new link." });
            }
            return res.status(500).json({ status: "failed", message: "Unable to reset password. Please try again later." });
        }
    }
}

export default userController;