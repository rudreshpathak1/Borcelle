import React, { useEffect, useState } from "react";
import axios from "axios";

const Menu = () => {
  const [foodItems, setFoodItems] = useState([]);

  // Fetch food items from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/menu");
        if (Array.isArray(res.data)) {
          setFoodItems(res.data);
          console.log("Fetched Successfully");
        } else {
          console.warn("Unexpected response:", res.data);
        }
      } catch (err) {
        console.error("Failed to fetch food items:", err);
      }
    };

    fetchData();
  }, []);

  // Preload images for smooth scroll
  useEffect(() => {
    foodItems.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, [foodItems]);

  // Group by cuisine
  const groupedByCuisine = foodItems.reduce((acc, item) => {
    if (!acc[item.cuisine]) acc[item.cuisine] = [];
    acc[item.cuisine].push(item);
    return acc;
  }, {});

  // Scroll function
  const scroll = (cuisine, direction) => {
    const container = document.getElementById(`scroll-${cuisine}`);
    if (!container) return;
    const amount = 300;
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Header */}
      <div className="flex flex-col items-center my-6 px-3 sm:px-6 md:px-10 text-center space-y-2">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Our <span className="text-primary">Menu</span>
        </h1>
        <p className="text-gray-800 text-sm sm:text-base max-w-md sm:max-w-2xl">
          Explore our cuisines with all your favorite dishes.
        </p>
      </div>

      {/* Cuisine sections */}
      {Object.keys(groupedByCuisine).map((cuisine, index) => (
        <div key={index} className="mb-12 px-3 sm:px-6 md:px-10">
          <h2 className="text-left text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            {cuisine}
            <span className="text-primary font-bold">.</span>
          </h2>

          {/* Scrollable row */}
          <div
            id={`scroll-${cuisine}`}
            className="flex space-x-4 overflow-x-auto no-scrollbar p-4"
            style={{ scrollBehavior: "smooth", willChange: "transform" }}
          >
            {groupedByCuisine[cuisine].map((item) => (
              <div
                key={item._id}
                className="flex-shrink-0 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-3 sm:p-4 flex flex-col items-center text-center justify-between h-80 sm:h-[380px] w-60"
              >
                <div className="w-full flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="rounded-xl w-full h-44 sm:h-48 object-cover mb-3"
                  />
                  <h3 className="text-base sm:text-lg font-semibold mt-3">
                    {item.name}
                  </h3>
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
      ))}
    </>
  );
};

export default Menu;
