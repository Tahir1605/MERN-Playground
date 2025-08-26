import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-50 px-6">
      {/* Big 404 Text */}
      <h1 className="text-8xl font-extrabold text-blue-600 mb-4">404</h1>

      {/* Subheading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Page Not Found
      </h2>

      {/* Message */}
      <p className="text-gray-600 text-center max-w-md mb-8">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/")}
          className="px-6 cursor-pointer py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition duration-300"
        >
          Go Home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 cursor-pointer rounded-xl bg-gray-200 text-gray-800 font-semibold shadow-md hover:bg-gray-300 transition duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
