import mongoose from 'mongoose'

const userSchemea = mongoose.Schema({
    name:{
        type:String,
        required :true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
})

export const User = mongoose.model('User', userSchemea)
