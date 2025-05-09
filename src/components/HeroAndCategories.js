import React from "react";

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
  return (
    <div className="w-full">
      {/* Hero Banner Section */}
      <div className="relative bg-[url('https://as1.ftcdn.net/v2/jpg/10/79/30/20/1000_F_1079302043_TiE5ujUAidWE39r3H6xBBXGnhvg4UZTD.jpg')] bg-cover bg-center h-[70vh] flex items-center justify-center text-white mt-2 w-[98%] ml-4 rounded-lg">
        <div className="bg-black/50 p-6 rounded-xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Delicious Meals Delivered Fast
          </h1>
          <p className="mb-4 text-lg">Your favorite dishes at your doorstep.</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full">
            Order Now
          </button>
        </div>
      </div>

      {/* Collections Section */}
      <div className="py-6 px-4 bg-gradient-to-br from-blue-50 to-purple-100">
        <h2 className="text-xl font-bold mb-4">Explore Curated Collections</h2>
        <div className="flex gap-6 overflow-x-auto justify-evenly">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="relative min-w-[250px] h-[300px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={collection.image}
                alt={collection.title}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
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
