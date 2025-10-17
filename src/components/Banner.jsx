import React from "react";
import {Link} from "react-router-dom";

const Banner = () => {
    return (

        <div className="my-10 bg-primary text-white rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-10 md:p-16">
                {/* Banner Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="https://res.cloudinary.com/duqwpptvw/image/upload/v1760431334/BannerImage_huquae.jpg"
                        alt="Delicious Food"
                        className="rounded-xl object-cover w-full max-w-sm shadow-lg"
                    />
                </div>

                {/* Banner Text */}
                <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                    <h1 className="font-semibold text-2xl md:text-4xl">
                        Flat 50% OFF – Your Feast Awaits!
                    </h1>
                    <p className="text-base md:text-lg leading-relaxed text-gray-100">
                        Craving something delicious? Order now and enjoy your favorite meals at
                        half the price. Taste happiness, save big!
                    </p>

                    <Link to="/offer">
                        <button className="bg-white text-primary font-medium px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
                            Grab Now
                        </button>
                    </Link>

                </div>
            </div>
        </div>

    );
};

export default Banner;
