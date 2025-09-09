import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./components/NextArrow";
import PrevArrow from "./components/PrevArrow";

const App = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    slidesToShow: 3,
    dots: true,
    speed: 500,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const cards = [
    { id: 1, title: "Card One", desc: "This is the first card", img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
    { id: 2, title: "Card Two", desc: "This is the second card", img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" },
    { id: 3, title: "Card Three", desc: "This is the third card", img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" },
    { id: 4, title: "Card Four", desc: "This is the fourth card", img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" },
    { id: 5, title: "Card Five", desc: "This is the fifth card", img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" },
    { id: 6, title: "Card Six", desc: "This is the sixth card", img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" },
  ];

  return (
    <div className="slider-container px-8 py-12">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="px-3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{card.desc}</p>
                <button className="mt-4 w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default App;
