import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstname:{type: String},
    lastname:{type: String},
    email: {type: String, required: true, unique: true, trim: true},
    password: {type: String, required: true, trim: true},
    role: [{type: mongoose.Schema.Types.ObjectId, ref:'Role'}]
},
{
    timestamps: true
}
);

const userModel = mongoose.model('user',userSchema);

export default userModel;