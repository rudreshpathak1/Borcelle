import React, { useEffect } from "react";
import { foodItems } from "./FoodItems";

const Products = () => {
  // Preload images for smooth scroll
  useEffect(() => {
    foodItems.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  const scroll = (direction) => {
    const container = document.getElementById("product-scroll");
    const amount = 300; // pixels to scroll per click
    container.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <>
      {/* Section Header */}
      <div className="flex flex-col items-center my-6 px-3 sm:px-6 md:px-10 text-center space-y-2">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Delicious Picks
        </h1>
        <p className="text-gray-800 text-sm sm:text-base max-w-md sm:max-w-2xl">
          Explore our carefully curated selection of mouthwatering meals, each chosen for its flavor, freshness, and popularity.
        </p>
      </div>

      {/* Scroll Buttons + Container */}
      <div className="relative">

        <div
          id="product-scroll"
          className="flex space-x-4 overflow-x-auto no-scrollbar p-4"
          style={{ willChange: "transform", scrollBehavior: "smooth" }}
        >
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-3 sm:p-4 flex flex-col items-center text-center min-w-[200px] md:min-w-[230px] justify-between"
            >
              <div className="w-full flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="rounded-xl w-full h-36 sm:h-44 md:h-48 object-cover mb-3"
                />

                <h3 className="text-base sm:text-lg font-semibold mt-3">{item.name}</h3>

                <p
                  className="text-gray-600 text-xs sm:text-sm mt-1 break-words overflow-hidden"
                  style={{
                    maxHeight: "3.6em",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item.description}
                </p>
              </div>

              <div className="flex justify-between items-center w-full mt-3">
                <span className="text-primary font-bold text-sm sm:text-base">
                  ₹{item.price}
                </span>
                <button className="bg-primary text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-lg hover:bg-primary/80 transition-all">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
