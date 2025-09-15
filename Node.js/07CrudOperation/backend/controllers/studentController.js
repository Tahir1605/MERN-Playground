import imageKit from "../config/imagekit.js";
import Student from "../models/studendModel.js";
import fs from 'fs';

const addStudent = async (req, res) => {
    try {

        const { name, email, mobile } = req.body;
        const imageFile = req.file;

        const fileBuffer = fs.readFileSync(imageFile.path);

        const response = await imageKit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/uploads"
        });

        const optimizeImageUrl = imageKit.url({
            path: response.filePath,
            transformation: [
                { quality: 'auto' },
                { format: 'webp' },
                { width: '1280' }
            ]
        });

        const image = optimizeImageUrl;

        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            res.json({
                success: false,
                message: "The Student Already exist",
            })
        }

        const newStudent = new Student({
            name,
            email,
            mobile,
            image
        })

        await newStudent.save();

        res.json({
            success: true,
            message: "New student is created",
        })

    } catch (error) {
        res.json({
            success: false,
            message: error.message || "Internal server error",
        })
    }
}

const fetchStudent = async (req, res) => {
    try {
        const studentData = await Student.find();

        if (!studentData.length > 0) {
            res.json({
                success: false,
                message: "Data not found",
            })
        }

        res.json({
            success: true,
            data: studentData,
        })

    } catch (error) {

        res.json({
            success: false,
            message: error.message || "Internal server error",
        })

    }
}

const deleteStudent = async (req, res) => {
    try {

        const { id } = req.params;

        const deleteStudent = await Student.findByIdAndDelete(id);

        if (!deleteStudent) {
            res.json({
                success: false,
                message: "Student not found",
            })
        }

        res.json({
            success: true,
            message: "Student Data deleted successfully",
        })

    } catch (error) {
        res.json({
            success: false,
            message: error.message || "Internal server error",
        })
    }
}

const updateStudent = async (req, res) => {
    try {

        const { id } = req.params;
        const { name, email, mobile } = req.body;
        const imageFile = req.file;
        const updateStudent = await Student.findById(id);

        if (!updateStudent) {
            res.json({
                success: false,
                message: "User not found",
            })
        }

        if (name) updateStudent.name = name;
        if (email) updateStudent.email = email;
        if (mobile) updateStudent.mobile = mobile;

        if (req.file) {
            //update image to imagekit
            
            const fileBuffer = fs.readFileSync(imageFile.path)
            const response = await imageKit.upload({
                file: fileBuffer,
                fileName: imageFile.originalname,
                folder: "/uploads"
            })

            // optimize through imagekit URL transformation

            const optimizeImageUrl = imageKit.url({
                path: response.filePath,
                transformation: [
                    { quality: 'auto' },  //Auto compression
                    { format: 'webp' },   // Convert to modern format
                    { width: '1280' }     // width resizing
                ]
            });

            updateStudent.image = optimizeImageUrl;
        }

        await updateStudent.save();

        res.json({
            success:true,
            message:"Student data updated successfully",
            data:updateStudent,
        })

    } catch (error) {
        
        res.json({
            success:false,
            message:error.message || "Internal server error",
        })
    }
}

export { addStudent, fetchStudent, deleteStudent, updateStudent }