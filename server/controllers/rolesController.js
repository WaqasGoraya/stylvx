import rolesModel from "../models/roles.js";
import permissionsModel from "../models/permissions.js";

class rolesController{
    static allRole = async(req,res)=>{
        try {
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status: "failed",
                message: "Something went wrong!",
                error: error
            })
        }
    }
    static addRole = async(req,res)=>{
        try {
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status: "failed",
                message: "Something went wrong!",
                error: error
            })
        }
    }
    static roleDetail = async(req,res)=>{
        try {
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status: "failed",
                message: "Something went wrong!",
                error: error
            })
        }
    } 
    static updateRole = async(req,res)=>{
        try {
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status: "failed",
                message: "Something went wrong!",
                error: error
            })
        }
    }
    static deleteRole = async(req,res)=>{
        try {
            
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

export default rolesController;