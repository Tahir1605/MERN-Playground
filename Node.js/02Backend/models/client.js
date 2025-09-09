import mongoose from "mongoose";

const clientSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
   password:{
        type:String,
        required:true
   },
   image:{
       type:String,
       required:true
   }

})

const Client = mongoose.model("Client",clientSchema);

export default Client