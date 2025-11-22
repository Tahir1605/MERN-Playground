import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useStudentContext } from "../context/StudentContext";

const UpdateForm = ({ student, closeModal }) => {
  const { backendUrl, fetchData } = useStudentContext();

  const [name, setName] = useState(student.name);
  const [email, setEmail] = useState(student.email);
  const [mobile, setMobile] = useState(student.mobile);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(student.image);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("email", email);
      formData.append("mobile", mobile);

      if (image) {
        formData.append("image", image);
      }

      const res = await axios.put(
        `${backendUrl}/api/student/update/${student._id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.success) {
        toast.success("Updated successfully 🎉");
        fetchData();
        closeModal();
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <form onSubmit={handleUpdate} className="space-y-4">

      <input
        type="text"
        value={name}
        className="w-full border p-2 rounded"
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        value={email}
        className="w-full border p-2 rounded"
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="text"
        value={mobile}
        className="w-full border p-2 rounded"
        onChange={(e) => setMobile(e.target.value)}
        required
      />

      {/* Preview Image */}
      {preview && (
        <img
          src={preview}
          alt="preview"
          className="w-24 h-24 object-cover border rounded"
        />
      )}

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          setImage(e.target.files[0]);
          setPreview(URL.createObjectURL(e.target.files[0]));
        }}
        className="w-full bg-gray-400 p-2 rounded-sm cursor-pointer"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded hover:bg-blue-700"
      >
        Update
      </button>
    </form>
  );
};

export default UpdateForm;
