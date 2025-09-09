import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name:{
           type:String,
           required:true,
           trim:true,
        },
        email:{
           type:String,
           required:true,
           unique:true,
           trim:true,
        },
        dob:{
           type:Date,
           required:true,
        },
        password:{
           type:String,
           required:true,
           minlength:6,
        },
        image:{
           type:String,
           default:"",
        },
    },
    {timestamps : true}
)

const User = mongoose.model("User" , userSchema);
export default User