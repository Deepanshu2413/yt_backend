import mongoose ,{ Schema, Types}from "mongoose";

const userSchema = new Schema({
    username: {
        Types: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true,
        trim: true,
    },
    emial: {
        Types: String,
        required: true,
        unique: true, 
        lowercase: true,
        index: true,
        trim: true,
    }
})

export const User =mongoose.Schema("User" , user.Schema )