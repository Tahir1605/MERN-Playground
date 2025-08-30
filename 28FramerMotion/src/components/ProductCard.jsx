import React from "react";

const ProductCard = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Product Image */}
      <img
        className="w-full h-64 object-cover"
        src={'https://plus.unsplash.com/premium_photo-1679513691641-9aedddc94f96?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D'}
        alt="Product"
      />

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800">Product Name</h3>
        <p className="mt-2 text-gray-600 text-sm">
          This is a short description of the product. It highlights the main
          features and makes it appealing for the customer.
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-semibold text-indigo-600">$49.99</span>
          <button className="px-4 py-2 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transition-all">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
