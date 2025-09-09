import { useState } from "react";
import { UseCartContext } from "../context/CartContext";
import { ShoppingCart, Star } from "lucide-react";

const Products = () => {
  const { products, addToCart, searchTerm } = UseCartContext();
  const [sortOption, setSortOption] = useState('relevent');

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);


  let searchedProduct = searchTerm.trim() === "" ?
    products
    :
    products.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );



  if (selectedCategories.length > 0) {
    searchedProduct = searchedProduct.filter((item) =>
      selectedCategories.includes(item.category)
    );
  }

  // 3. Filter by selected ratings
  if (selectedRatings.length > 0) {
    searchedProduct = searchedProduct.filter((item) =>
      selectedRatings.some(rating => item.rating >= rating)
    );
  }


  if (sortOption === 'low-high') {
    searchedProduct = [...searchedProduct].sort((a, b) => a.price - b.price)
  }
  else if (sortOption === 'high-low') {
    searchedProduct = [...searchedProduct].sort((a, b) => b.price - a.price)
  }


  const handleFilterChange = (event, filterType) => {
    const { value, checked } = event.target;

    if (filterType === 'category') {
      setSelectedCategories(prev =>
        checked ? [...prev, value] : prev.filter(cat => cat !== value)
      );
    } else if (filterType === 'rating') {
      // The rating value is a string from the input, so convert it to a number
      const numericValue = parseInt(value, 10);
      setSelectedRatings(prev =>
        checked ? [...prev, numericValue] : prev.filter(rat => rat !== numericValue)
      );
    }
  };




  return (
    <div className="flex flex-col lg:flex-row justify-around m-5 gap-10">
      {/* Sidebar Filters */}
      <div className="flex flex-col gap-5 w-full lg:w-64">
        <h1 className="text-3xl font-semibold">Filters</h1>

        {/* Categories */}
        <div className="border flex flex-col gap-3 border-gray-200 rounded-xl px-6 py-4 shadow-sm bg-white">
          <h2 className="text-xl font-semibold">Categories</h2>
          <ul className="flex flex-col gap-2 text-gray-600">
            {["men", "women", "kids"].map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition"
              >
                <input type="checkbox"
                  value={cat}
                  onChange={(e) => handleFilterChange(e, 'category')}
                  checked={selectedCategories.includes(cat)}
                  className="accent-blue-600" /> {cat}
              </label>
            ))}
          </ul>
        </div>

        {/* Rating */}
        <div className="border flex flex-col gap-3 border-gray-200 rounded-xl px-6 py-4 shadow-sm bg-white">
          <h2 className="text-xl font-semibold">Rating</h2>
          <ul className="flex flex-col gap-2 text-gray-600">
            {[3, 4, 5].map((star) => (
              <label
                key={star}
                className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition"
              >
                <input type="checkbox"
                  value={star} // Make sure to set the value
                  onChange={(e) => handleFilterChange(e, 'rating')}
                  checked={selectedRatings.includes(star)}
                  className="accent-blue-600" /> {star} Star & Up
              </label>
            ))}
          </ul>
        </div>
      </div>

      {/* Products */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl font-semibold">All Collection</h1>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-300 rounded-lg outline-none px-5 py-2 cursor-pointer shadow-sm hover:border-blue-500 transition">
            <option value="relevent">Sort: Relevant</option>
            <option value="low-high">Sort: Low to High</option>
            <option value="high-low">Sort: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {searchedProduct.length > 0 ? (
            searchedProduct.map((product) => (
              <div
                key={product._id}
                className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 hover:-translate-y-2 h-full"
              >
                {/* Badge */}
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-green-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    New
                  </span>
                )}

                {/* Product Image */}
                <div className="h-56 flex items-center justify-center bg-gray-50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-44 rounded-md cursor-pointer object-contain transform hover:scale-110 transition duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-5 flex flex-col flex-1 space-y-3">
                  {/* Title & Brand */}
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 hover:text-blue-600 transition">
                      {product.title}
                    </h2>
                    <p className="text-sm text-gray-500">{product.brand}</p>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-blue-600">
                      ${product.discountedPrice}
                    </span>
                    <span className="text-sm line-through text-gray-400">
                      ${product.oldPrice}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < product.rating
                          ? "fill-yellow-500 stroke-yellow-500"
                          : "stroke-gray-300"
                          }`}
                      />
                    ))}
                  </div>

                  {/* Add to Cart */}
                  <div className="mt-auto pt-3">
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-xl font-medium shadow-md hover:shadow-lg hover:opacity-90 transition"
                    >
                      <ShoppingCart className="w-4 h-4" /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              Loading products...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
