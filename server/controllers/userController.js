import userModel from "../models/users.js"
class userController {
    static getUsers = async(req,res) => {
        try {
            const users = await userModel.find({});
            if(users){
                return res.status(200).json(users)
            }

        } catch (error) {
            return res.status(500).json({
                status: "failed",
                message: "Unable to fetch data",
                error: error
            })
        }
    }
}

export default userController