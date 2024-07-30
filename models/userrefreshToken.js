import mongoose from "mongoose";

const refreshtokenSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    token: {type: String, required: true},
    blackListed: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now(), expires:'7d'}
});

const refreshTokenModel = mongoose.model('RefreshToken',refreshtokenSchema);

export default refreshTokenModel;