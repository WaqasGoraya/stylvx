import env from "dotenv";
env.config();
import express, { json } from "express";
import cors from "cors";
import CONNECT_DB from "./config/conn.js";
import cookieParser from "cookie-parser";
import passport from "passport";
import routes from "./routes/web.js";
import './config/jwt-strategy.js';
import './config/google-auth-strategy.js';
import TokenCookies from "./utils/setTokenCookies.js";
import path from 'path'
const app = express();
const port = process.env.PORT || 8000;



var corsOptions = {
    origin: process.env.FRONTEND_HOST,
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Cors
app.use(cors(corsOptions));

// Json
app.use(express.json());

// Cookie Parser
app.use(cookieParser());

// Passport Js
app.use(passport.initialize());

// DB Connection
CONNECT_DB(process.env.DB_URL);

// Serve static files from the 'public' directory
app.use('/uploads', express.static(path.join(process.cwd(), 'public', 'uploads')));

// routes
app.use('/api',routes)

app.get('/auth/google', passport.authenticate('google', { session: false, scope: ['profile','email'] }));
  
  app.get('/auth/google/callback', 
    passport.authenticate('google', {session:false, failureRedirect: '/login' }),
    function(req, res) {
        const {user, accesstoken, refreshtoken} = req.user;
        TokenCookies(res,accesstoken,refreshtoken);
        
      // Successful authentication, redirect home.
      res.status(200).json({
        status: "Success",
        message: "Login Success with Google"
      })
    //   res.redirect('/');
    });


app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})