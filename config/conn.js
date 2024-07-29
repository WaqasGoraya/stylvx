import mongoose from "mongoose";

const CONNECT_DB = async (dbUrl) => {
    const options = {
        dbName: process.env.DB_NAME
    }
    try {
        await mongoose.connect(dbUrl,options)
        console.log(`Database Connected Successfully`)
    } catch (error) {
        console.log(error);
    }
}

export default CONNECT_DB