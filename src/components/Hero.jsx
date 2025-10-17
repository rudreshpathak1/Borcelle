import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅ Use Link for SPA routing

const images = [
  "https://res.cloudinary.com/duqwpptvw/image/upload/v1760431519/Hero1_dce92s.jpg",
  "https://res.cloudinary.com/duqwpptvw/image/upload/v1760431519/Hero2_jysfhd.jpg",
  "https://res.cloudinary.com/duqwpptvw/image/upload/v1760431520/Hero3_ougykz.jpg",
  "https://res.cloudinary.com/duqwpptvw/image/upload/v1760431521/Hero4_mxahbv.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval;

    const startSlideshow = () => {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 4000);
    };

    const stopSlideshow = () => {
      clearInterval(interval);
    };

    startSlideshow();

    const handleVisibilityChange = () => {
      if (document.hidden) stopSlideshow();
      else startSlideshow();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopSlideshow();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section className="relative w-full h-[55vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background Slideshow */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Hero ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-20"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-3 sm:px-6 z-30">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
          Discover Tasty Delights
        </h1>

        <p className="text-sm sm:text-base md:text-xl mb-4 sm:mb-6 max-w-[95%] sm:max-w-xl md:max-w-2xl">
          Experience the magic of our handmade delights — where every bite is
          crafted with freshness and passion.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:space-x-5 w-auto sm:w-auto justify-center">
          <Link to="/menu">
            <button className="px-5 py-2 sm:px-6 sm:py-3 bg-white text-black text-sm sm:text-base font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300">
              Explore Menu
            </button>
          </Link>
          <Link to="/order">
            <button className="px-5 py-2 sm:px-6 sm:py-3 text-white text-sm sm:text-base border-2 font-semibold rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
