import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true,
    },
    image:{
        type:String
    }
},{timestamps:true});

const Student = mongoose.model('Student' , studentSchema);

export default Student;