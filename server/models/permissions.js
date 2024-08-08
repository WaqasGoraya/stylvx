import mongoose from "mongoose";

const permissionsSchema = mongoose.Schema({
    name:{type: String, required: true, unique: true}
},
{
    timestamps: true
});

const permissionsModel = mongoose.model('Permission', permissionsSchema);

export default permissionsModel;