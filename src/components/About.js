import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-800">
      {/* Hero Section */}
      <div className="bg-[url('https://www.swiggy.com/corporate/wp-content/uploads/2024/10/about-banner-image-scaled.webp')] bg-cover bg-center bg-no-repeat h-[60vh] flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          About Us
        </h1>
      </div>

      {/* About Text */}
      <div className="max-w-4xl mx-auto py-12 px-6 text-center">
        <p className="text-lg text-gray-700">
          FoodieHub is a new-age consumer-first organization offering an
          easy-to-use convenience platform, accessible through a unified app. We
          bring together your favorite services — from food delivery to instant
          groceries — all under one roof.
        </p>
      </div>

      {/* Services Section */}
      <div className="relative bg-[url('https://www.swiggy.com/corporate/wp-content/uploads/2024/10/map-bg.png')] bg-cover bg-center bg-no-repeat py-20">
        <div className="flex flex-wrap items-center justify-center gap-16">
          {/* Food */}
          <div className="flex flex-col items-center">
            <img
              src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/food.webp"
              alt="Food"
              className="w-36 h-36 object-cover shadow-lg"
            />
          </div>

          {/* Instamart */}
          <div className="flex flex-col items-center">
            <img
              src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/instamart.webp"
              alt="Instamart"
              className="w-36 h-36 object-cover shadow-lg"
            />
          </div>

          {/* Dineout */}
          <div className="flex flex-col items-center">
            <img
              src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/dineout-282x300.webp"
              alt="Dineout"
              className="w-36 h-36 object-cover shadow-lg"
            />
          </div>

          {/* Genie */}
          <div className="flex flex-col items-center">
            <img
              src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/genie.webp"
              alt="Genie"
              className="w-36 h-36 object-cover shadow-lg"
            />
          </div>

          {/* Minis */}
          <div className="flex flex-col items-center">
            <img
              src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/minis.webp"
              alt="Minis"
              className="w-36 h-36 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
