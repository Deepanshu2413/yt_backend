import connectDB from "./db/index.js";
import dotenv from "dotenv"
import express from 'express';
const app = express();

dotenv.config({
    path : './env' 
})

connectDB()
//promises - .then(res)/.catch(err)
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})



/*  first approch
;(async() => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error)=> {
            console.log("Error : " , error);
            throw error
        })
        app.listen(process.env.PORT , ()=> { 
            console.log(`Server is runing and DB connected succesfully on PORT ${process.env.PORT}`)
        }) 
    }catch(error) {
        console.log("error :" , error)
        throw error
    }   
})()

*/