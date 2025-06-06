import mongoose ,{ Schema, Types}from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const userSchema = new Schema({
    username: {
        Types: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowecase: true,
        trim: true, 
    },
    fullName: {
        type: String,
        required: true,
        trim: true, 
        index: true
    },
    avatar: {
        type: String, // cloudinary url
        required: true,
    },
    coverImage: {
        type: String, // cloudinary url
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    refreshToken: {
        type: String
    }},
    {timestamps:true}
)

//bcrypt - hashing
userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password , 10)
    next()
} ) // use normal fun

// 
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
    // return - true/false only
}

//jwt - bearer token
// ACCESS TOKEN
userSchema.method.generateAccessToken = function (){
    return jwt.sign(
        {
            _id: this._id, // from m.db
            email: this.email,
            username: this.username,
            fullname: this.fullName
        },process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_SECRET
        }

    )
}

// REFRESH TOKEN
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id:this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY 
        }
    )
}



export const User =mongoose.Schema("User" , userSchema )