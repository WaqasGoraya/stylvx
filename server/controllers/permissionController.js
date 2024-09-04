import permissionsModel from "../models/permissions.js";

class permissionController {
    static getAllPermissions = async(req,res)=>{
        try {
            const permissions = await permissionsModel.find({})
            return res.status(200).json({
                status: "success",
                permissions
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status: "failed",
                message: "Something went wrong!",
                error: error
            })
        }
    }
    static addPermission = async (req, res) => {
        try {
            const { name } = req.body;
    
            // Check if the name is provided
            if (!name) {
                return res.status(422).json({
                    status: "failed",
                    message: "Name is required",
                });
            }
    
            // Check if the permission already exists
            const isExist = await permissionsModel.findOne({ name });
            if (isExist) {
                return res.status(403).json({
                    status: "failed",
                    message: "Permission already exists",
                });
            }
    
            // Create a new permission
            const permission = new permissionsModel({ name });
            await permission.save();
    
            return res.status(201).json({
                status: "success",
                message: "Permission Created!",
                permission,
            });
        } catch (error) {
            console.error("Error creating permission:", error);
            return res.status(500).json({
                status: "failed",
                message: "Something went wrong!",
                error: error.message, // Send only the error message to avoid exposing stack traces
            });
        }
    }
    
    static permissionDetail = async(req,res)=>{
        try {
            const {id} = req.params
            const {name} = req.body
            const permission = await permissionsModel.findById(id);
            return res.status(200).json({
                status:'success',
                permission
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status: "failed",
                message: "Something went wrong!",
                error: error
            })
        }
    }
    static updatePermission = async(req,res)=>{
        try {
            const {id} = req.params
            const {name} = req.body
           const permission = await permissionsModel.findByIdAndUpdate(id,{name:name},{new:true});
            return res.status(200).json({
                status:'success',
                message:"Updated Success!",
                permission
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status: "failed",
                message: "Something went wrong!",
                error: error
            })
        }
    }
    static deletePermission = async(req,res)=>{
        try {
            const {id} = req.params
            const ConfirmDelete = await permissionsModel.findByIdAndDelete(id);
            if(ConfirmDelete){
                return res.status(200).json({
                    status:'success',
                    message:'Deletes Successfully!'
                })
            }else{
                return res.status(422).json({
                    status:'failed',
                    message:'Permission not found!'
                })
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
}

export default permissionController;