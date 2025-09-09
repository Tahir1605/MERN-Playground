import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-12 bg-gray-50">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-4">
        Contact Page
      </h1>
      <p className="text-gray-600 text-lg text-center mb-10 max-w-xl">
        Get in touch with us! You can either fill out our contact form or check
        out our contact information.
      </p>

      {/* Buttons */}
      <div className="flex gap-6">
        <button
          onClick={() => navigate("form")}
          className="cursor-pointer px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300"
        >
          Contact Form
        </button>
        <button
          onClick={() => navigate("info")}
          className="cursor-pointer px-6 py-3 rounded-xl bg-gray-200 text-gray-800 font-semibold shadow-md hover:bg-gray-300 hover:shadow-lg transition duration-300"
        >
          Contact Info
        </button>
      </div>
    </div>
  );
}

export default Contact;
