import React, { useRef } from "react";

const collections = [
  {
    title: "Best Pizza Places",
    subtitle: "20 Places",
    image:
      "https://b.zmtcdn.com/data/collections/68113c6bddb038ac936a1f63bcf5262e_1707387325.png?output-format=webp",
  },
  {
    title: "Mother's Day Special Places",
    subtitle: "40 Places",
    image:
      "https://b.zmtcdn.com/data/collections/3b1f56c1936a6bfa702efd28188ebe6f_1688043268.png?output-format=webp",
  },
  {
    title: "Insta-worthy Spots",
    subtitle: "32 Places",
    image:
      "https://b.zmtcdn.com/data/collections/f123375fee94c32136696c2af1e25a28_1709812170.png?output-format=webp",
  },
  {
    title: "Top Trending Spots",
    subtitle: "30 Places",
    image:
      "https://b.zmtcdn.com/data/collections/bb50a06d2f6bed7355c774ad0145c0a0_1715681132.png?output-format=webp",
  },
  {
    title: "Newly Opened Places",
    subtitle: "23 Places",
    image:
      "https://b.zmtcdn.com/data/collections/f6a0fad5ac8dfff35ddf3d7520ba42b5_1705410659.png?output-format=webp",
  },
];

const HeroAndCategories = () => {
  const collectionsRef = useRef(null);

  const handleOrderClick = () => {
    collectionsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* Hero Video Banner Section */}
      <div className="relative h-[100vh] flex items-center justify-center text-white">
        <video
          src="https://b.zmtcdn.com/data/file_assets/2627bbed9d6c068e50d2aadcca11ddbb1743095925.mp4"
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="bg-black/50 p-6 rounded-xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Delicious Meals Delivered Fast
          </h1>
          <p className="mb-4 text-lg">Your favorite dishes at your doorstep.</p>
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full"
            onClick={handleOrderClick}
          >
            Order Now
          </button>
        </div>
      </div>

      {/* Collections Section */}
      <div
        ref={collectionsRef}
        className="py-6 px-4 bg-gradient-to-br from-blue-50 to-purple-100"
      >
        <h2 className="text-xl font-bold mb-4">Explore Curated Collections</h2>
        <div className="flex gap-6 overflow-x-auto justify-evenly">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="relative min-w-[250px] h-[300px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 flex flex-col justify-end p-4">
                <h3 className="text-lg font-bold text-white">
                  {collection.title}
                </h3>
                <p className="text-sm text-gray-200">{collection.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroAndCategories;
