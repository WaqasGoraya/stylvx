import categoryModel from "../models/categotyModel.js";
class categoryController {

    static getAllCategory = async(req,res)=>{
        try {
            const category = await categoryModel.find({})
            return res.status(200).json({
                status: "success",
                category
            })
        } catch (error) {
            //console.log(error)
            return res.status(500).json({
                status: "failed",
                message: "Something went wrong!",
                error: error
            })
        }
    }
    static addCategory = async(req,res)=>{
        try {
            const {name} = req.body
            if(!name){
                res.status(422).json({
                    status:"failed",
                    message:"name is required"
                })
            }
            const isExist = await categoryModel.findOne({name:name})
            if(isExist){
                res.status(403).json({
                    status:"failed",
                    message:"Already exist"
                });
            }
            const category =  await new categoryModel({name}).save();
            if(category){
             return res.status(201).json({
                status: "success",
                message: "category Created!",
                category
                
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
    static categoryDetail = async(req,res)=>{
        try {
            const {id} = req.params
            const category = await categoryModel.findById(id);
            return res.status(200).json({
                status:'success',
                category
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
    static updateCategory = async(req,res)=>{
        
        try {
            const {id} = req.params
            const {name} = req.body
           const category = await categoryModel.findByIdAndUpdate(id,{name},{new: true});
            return res.status(200).json({
                status:'success',
                message:"Updated Success!",
                category
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
    static deleteCategory = async(req,res)=>{
        try {
            const {id} = req.params
            const ConfirmDelete = await categoryModel.findByIdAndDelete(id);
            if(ConfirmDelete){
                return res.status(200).json({
                    status:'success',
                    message:'Deletes Successfully!'
                })
            }else{
                return res.status(422).json({
                    status:'failed',
                    message:'category not found!'
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

export default categoryController;
