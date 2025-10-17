import React from 'react'
import { ReviewList } from './ReviewList'

const Testimonials = () => {
    return (
        <>

            {/* Section Header */}
            <div className="flex flex-col items-center my-6 px-3 sm:px-6 md:px-10 text-center space-y-2">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                    Customer Reviews
                </h1>
                <p className="text-gray-800 text-sm sm:text-base max-w-md sm:max-w-2xl">
                    See what our customers think about their favorite meals.
                </p>
            </div>

            {/* Body Section */}

            <div className="overflow-x-auto no-scrollbar">
                <div className="flex gap-4 px-4 sm:px-6 md:px-8">
                    {ReviewList.map((item) => (
                        <div
                            key={item.id}
                            className="bg-primary rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col items-center text-center flex-shrink-0 w-60 sm:w-64 md:w-72 justify-between"
                        >
                            {/* Top content: Image, Name, Review */}
                            <div className="flex flex-col items-center">
                                {/* Image */}
                                <img
                                    src={`${item.profilePic}?auto=compress&cs=tinysrgb&w=400`}
                                    alt={item.name}
                                    loading="lazy"
                                    className="rounded-full w-22 h-22 sm:w-24 sm:h-24 md:w-26 md:h-26 object-cover mb-3 shadow-sm"
                                />

                                {/* Name */}
                                <h3 className="text-base sm:text-lg font-semibold text-white">{item.name}</h3>

                                {/* Review Text */}
                                <p
                                    className="text-gray-200 text-sm mt-1 overflow-hidden"
                                    style={{
                                        display: "-webkit-box",
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: "vertical",
                                    }}
                                >
                                    {item.review}
                                </p>
                            </div>

                            {/* Star Rating fixed at bottom */}
                            <div className="flex justify-center items-center mt-4 space-x-1">
                                {Array(5)
                                    .fill(0)
                                    .map((_, i) =>
                                        i < item.rating ? (
                                            <span key={i} className="text-yellow-400 text-2xl">
                                                ★
                                            </span>
                                        ) : (
                                            <span key={i} className="text-gray-300 text-2xl">☆</span>
                                        )
                                    )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </>
    )
}

export default Testimonials