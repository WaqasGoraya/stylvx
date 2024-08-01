import permissionsModel from "../models/permissions.js";
import rolesModel from "../models/roles.js";
import userModel from "../models/users.js";
import bcrypt from "bcrypt";
import generateTokens from "../utils/generateTokens.js";
import { populate } from "dotenv";
import TokenCookies from "../utils/setTokenCookies.js";
import refreshAccessToken from "../utils/refreshAccessToken.js";
class userController {
    static userRegistration = async (req,res) => {
        try {
            const {username, email, password, passwordConfirm} = req.body;
            // Check all fields are provided
            if(!username || ! email || !password || !passwordConfirm){
                return res.status(400).json({status: "Failed", message: "All fields are required!"});
            }else{
                // Check email and username is unique
                const emailExists = await userModel.findOne({ email: email });
                const usernameExists = await userModel.findOne({ username: username });
                // return false;
                if(emailExists && usernameExists){
                return res.status(400).json({status: "Failed", message: "Email and username already exist!"});
                }
                if (emailExists) {
                    return res.status(400).json({ status: "Failed", message: "Email already exists!" });
                }
                if (usernameExists) {
                    return res.status(400).json({ status: "Failed", message: "Username already exists!" });
                } 
                // Check Password Confirmation
                if(password !== passwordConfirm){
                    return res.status(400).json({status: "Failed", message: "Password and Confirm Password does'nt match!"});
                }
                // Generate password Hash
                const hashPassword = await bcrypt.hash(password,10);

                // roles
                const userRole = await rolesModel.findOne({name: 'user'});
                //  Save New User into DB
                const newUser = await new userModel({username,email, password:hashPassword,role: userRole._id}).save();

                return res.status(201).json({
                    status: "Success",
                    message: "User registerd success",
                    user: {id: newUser._id, username: newUser.username, email: newUser.email}
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
                return res.status(400).json({
                    status: "Failed",
                    message: "All Fields are required"
                });
            }
            const user = await userModel.findOne({
                $or: [
                    { email: email },
                    { username: email }
                ]
            }).populate({
                path: 'role',
                // populate:{
                //     path: 'permissions',
                //     model: permissionsModel
                // }
            });
            if(!user){
                return res.status(400).json({
                    status: "Failed", 
                    message: "Invalid email/username or password."
                });
            }
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(400).json({ status: "Failed", message: "Invalid email/username or password." });
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
                    username: user.username,
                    role: user.role
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
}

export default userController;