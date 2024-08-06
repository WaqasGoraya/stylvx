import env from "dotenv";
env.config();
import express, { json } from "express";
import cors from "cors";
import CONNECT_DB from "./config/conn.js";
import cookieParser from "cookie-parser";
import passport from "passport";
import routes from "./routes/web.js";
import './config/jwt-strategy.js';
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

// routes
app.use('/api/user/',routes)
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})