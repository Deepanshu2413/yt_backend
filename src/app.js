import express from 'express';
const app =express();
import cookieParser from 'cookie-parser';

//app.use for middlware
//normally app 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


app.use(express.json({ limit: "16kb"}))
app.use(express.urlencoded({ extended: true, limit:"16kb"}))    // to handl spaces and %20 in url, extendet for nested obj 
app.use(express.static("public"))
app.use(cookieParser())

//import - route
import userRouter from "./routes/user.router.js"

//route declaration
app.use('/api/v1/user' , userRouter)

export { app }