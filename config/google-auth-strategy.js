import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import userModel from "../models/users.js";
import generateTokens from "../utils/generateTokens.js";
import bcrypt from 'bcrypt';

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
        console.log("Profile", profile);
    try {
        let user = await userModel.findOne({email: profile._json.email});
        if(!user){
            const lastSixDigitsID = profile.id.substring(profile.id.length - 6);
            const lastTwoDigitsName = profile._json.name.substring(profile._json.name.length - 2);
            const newPass = lastTwoDigitsName + lastSixDigitsID
            // Generate salt and hash password
            const salt = await bcrypt.genSalt(Number(process.env.SALT));
            const hashedPassword = await bcrypt.hash(newPass, salt);
            user = await userModel.create({
              username: profile._json.name,
              email: profile._json.email,
              password: hashedPassword,
            })
        }
        const {accesstoken,refreshtoken} = await generateTokens(user);
        return done(null , {user, accesstoken, refreshtoken});
    } catch (error) {
        return done(error)
    }
  }
));
