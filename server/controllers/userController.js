import rolesModel from "../models/roles.js";
import userModel from "../models/users.js";
import generator from "generate-password";
import bcrypt from "bcrypt";
import WelcomeEmail from "../config/welcomeEmail.js";
import passport from "passport";
class userController {
    static getUsers = async(req,res) => {
        try {
            const users = await userModel.find({}).populate({path: 'role'});
            if(users){
                return res.status(200).json({
                    status:"success",
                    users
                });
            }
        } catch (error) {
            return res.status(500).json({
                status: "failed",
                message: "Something went wrong!",
                error: error
            })
        }
    }
    static addUser = async(req,res)=>{
            try {
                const {firstname, lastname, email, role } = req.body
                if (!firstname || !lastname || !email || !role) {
                    return res.status(422).json({
                        status: "failed",
                        message: "All fields are required!",
                    });
                }
                    const isEmailExist = await userModel.findOne({email:email});
                    if(isEmailExist){
                        return res.status(409).json({
                            status: "failed",
                            message: "Email already exist!",
                        });
                    }
                    const password = generator.generate({
                        length: 10,
                        numbers: true
                    });
                    const HashedPassword = await bcrypt.hash(password,10);
                    const user = await new userModel({
                        firstname:firstname,
                        lastname:lastname,
                        email:email,
                        password:HashedPassword,
                        role:role
                    }).save();
                    const name = firstname +' '+ lastname;
                   await WelcomeEmail(name,email,password);
                    if(user){
                        return res.status(201).json({
                            status: "success",
                            message: "User Created Successfully!",
                            user
                        });
                    }else{
                        return res.status(404).json({
                            status: "failed",
                            message: "Unable to create user!",
                        });
                    }
              
            } catch (error) {
                console.log(error)
                return res.status(500).json({
                    status: "failed",
                    message: "Something went wrong!",
                    error
                }); 
            }
    }
    static userDetail = async(req,res) => {
        try {
            const {id} = req.params;
            const user = await userModel.findOne({_id:id});
            // console.log(user.role[0].toString())
            if(user){
                return res.status(200).json({
                    status:"success",
                    user
                });
            }else{
                res.json({
                    status:"failed",
                    message:"User not found"
                });
            }
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status: "failed",
                message: "Something went wrong!",
                error: error
            })
        }
    }
    static updateUser = async(req,res)=> {
        try {
            const{firstname, lastname, role} = req.body
            const {id} = req.params
            const user = await userModel.findByIdAndUpdate(id,{
                firstname,
                lastname,
                role
            });
            if(user){
                return res.status(200).json({
                    status:"success",
                    message: "User Update Successfully!"
                });
            }else{
                res.json({
                    status:"failed",
                    message:"User not found"
                });
            }
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status: "failed",
                message: "Something went wrong!",
                error: error
            })
        }
    }
    static getRoles = async(req,res) => {
        try {
            const roles = await rolesModel.find({});
            return res.status(200).json({
                status:"success",
                roles
            });
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status: "failed",
                message: "Something went wrong!",
                error: error
            })
        }
    }
    static deleteUser = async(req,res)=>{
        try {
            const {id} = req.params
             const isDeleted = await userModel.findByIdAndDelete(id);
             if(isDeleted){
                return res.status(200).json({
                    status:"success",
                    message: "User Deleted Success"
                });
             }else{
                res.json({
                    status:"failed",
                    message:"User Not Found!"
                });
            }
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status: "failed",
                message: "Something went wrong!",
                error: error
            })
        }
    }
    static editProfile = async(req,res)=>{
        try {
            const {id} = req.params;
            const {firstname,lastname} = req.body;
               // Server-side validations
               if (!firstname || !lastname) {
                if (req.file) {
                    fs.unlinkSync(req.file.path); // Remove the uploaded file if validation fails
                }
                return res.status(400).json({ message: "First and Last Name required" });
            }
            const image = req.file ? `/uploads/${req.file.filename}` : null;
            const isExist = await userModel.findOne({_id:id});
            if(!isExist){
                return res.status(404).json({status:"Failed",message:"User Not Found!"})
            }
            await userModel.findByIdAndUpdate(id,{
                firstname:firstname,
                lastname: lastname,
                image:image
            });
            return res.status(200).json({status:"success",message:"Profile Updated Successfully!"})
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status: "failed",
                message: "Something went wrong!",
                error: error
            })
        }
    }
    static changePassword = async(req,res)=>{
        try {
                const { oldpassword, newpassword} = req.body;
                const {id} = req.params;
                const user = await userModel.findOne({_id:id});
                if(!user){
                    return res.status(404).json({status:"Failed",message:"User Not Found!"})
                }
                const IsPasswordMatch = await bcrypt.compare(oldpassword,user.password);
                if(!IsPasswordMatch){
                    return res.status(422).json({status:"failed",message:"Old Password id wrong"});
                }
                const newPasswordHashed = await bcrypt.hash(newpassword,10);
                await userModel.findByIdAndUpdate(id,{
                    password: newPasswordHashed
                })
                return res.status(200).json({status:"success",message:"Password Updated Successfully!"})

        } catch (error) {
            console.error(error)
            return res.status(500).json({
                status: "failed",
                message: "Something went wrong!",
                error: error
            }) 
        }
    }
}

export default userController