import React from 'react'
import { desertItems } from "./DesertItems";

const Desert = () => {
    return (
        <>

            {/* Section Header */}
            <div className="flex flex-col items-center my-6 px-3 sm:px-6 md:px-10 text-center space-y-2">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                    Our Special Desserts
                </h1>
                <p className="text-gray-800 text-sm sm:text-base max-w-md sm:max-w-2xl">
                    End your meal on a sweet note! Indulge in our handcrafted desserts made with love and the finest ingredients.
                </p>
            </div>

            {/* Product Grid - Horizontal Scroll */}
            <div className="flex space-x-4 p-4 sm:p-6 overflow-x-auto no-scrollbar">
                {desertItems.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-3 sm:p-4 flex flex-col items-center text-center min-w-[200px] md:min-w-[230px] justify-between"
                    >
                        <div className="w-full flex flex-col items-center">
                            {/* Image */}
                            <img
                                src={`${item.image}?auto=compress&cs=tinysrgb&w=400`}
                                alt={item.name}
                                loading="lazy"
                                className="rounded-xl w-full h-36 sm:h-44 md:h-48 object-cover mb-3"
                            />

                            {/* Name */}
                            <h3 className="text-base sm:text-lg font-semibold mt-3">{item.name}</h3>

                            {/* Description */}
                            <p
                                className="text-gray-600 text-xs sm:text-sm mt-1 break-words overflow-hidden"
                                style={{
                                    maxHeight: "3.6em", // approx 3 lines
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                }}
                            >
                                {item.description}
                            </p>
                        </div>

                        {/* Price + Button fixed at bottom */}
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

        </>
    )
}

export default Desert