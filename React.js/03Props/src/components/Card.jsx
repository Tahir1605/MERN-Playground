const Card = ({ name, btnText = "Click" }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex gap-5 p-5 my-5">
      {/* Image Section */}
      <div className="w-1/3">
        <img
          src="https://images.unsplash.com/photo-1480497490787-505ec076689f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D"
          alt="Mountain"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between w-2/3">
        <div>
          <p className="text-xl font-semibold text-gray-800">{name}</p>
          <p className="text-gray-600 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            non enim aliquam harum cupiditate deleniti reiciendis sequi.
          </p>
        </div>
        <button className="mt-3 cursor-pointer px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Card;
