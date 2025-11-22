import axios from "axios";
import { useStudentContext } from "../context/StudentContext";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import UpdateForm from "./UpdateForm";
import { useEffect } from "react";

const Student = () => {
  const { studentData, fetchData, backendUrl } = useStudentContext();
  console.log(studentData);
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(backendUrl + `/api/student/delete/${id}`);
      if (response.data.success) {
        toast.success(response.data.message);
        fetchData()
      }
      else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message);
    }
  }



  return (
    <div className="bg-gray-950 min-h-screen flex justify-center items-center p-4">
      <div className="bg-white shadow-2xl rounded-xl overflow-hidden w-full max-w-6xl">
        {/* Table Header */}
        <div className="grid grid-cols-6 bg-gray-100 text-gray-700 font-semibold text-sm md:text-base p-3">
          <div className="col-span-1 text-center">Profile</div>
          <div className="col-span-1 text-center">Name</div>
          <div className="col-span-1 text-center">Email</div>
          <div className="col-span-1 text-center">Mobile</div>
          <div className="col-span-1 text-center">Action-1</div>
          <div className="col-span-1 text-center">Action-2</div>
        </div>

        {/* Table Body */}
        {studentData && studentData.length > 0 ? (
          studentData.map((item) => (
            <div
              key={item._id}
              className="grid grid-cols-6 items-center border-b last:border-none hover:bg-gray-50 transition p-3 text-sm md:text-base"
            >
              <div className="flex items-center justify-center gap-3">
                <img
                  src={item.image}
                  alt="profile"
                  className="w-12 h-12 rounded-full border object-cover"
                />
              </div>
              <div className="truncate text-center">{item.name}</div>
              <div className="truncate text-center">{item.email}</div>
              <div className="text-center">{item.mobile}</div>
              <div
                onClick={() => {
                  setSelectedStudent(item);
                  setShowModal(true);
                }}
                className="text-center bg-amber-400 w-[70%] py-1.5 rounded-md cursor-pointer text-white font-semibold">Edit</div>
              <div
                onClick={() => handleDelete(item._id)}
                className="text-center bg-red-600 w-[70%] py-1.5 rounded-md cursor-pointer text-white font-semibold">Delete</div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 py-6">Data not found</div>
        )}
      </div>

      {showModal && selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-xl p-6 relative">

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-700 hover:text-red-600 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">Update Student</h2>

            <UpdateForm
              student={selectedStudent}
              closeModal={() => setShowModal(false)}
            />
          </div>
        </div>
      )}


      <ToastContainer position="top-left" autoClose={3000} />
    </div>
  );
};

export default Student;
