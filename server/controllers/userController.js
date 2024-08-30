import rolesModel from "../models/roles.js";
import userModel from "../models/users.js"
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
}

export default userController