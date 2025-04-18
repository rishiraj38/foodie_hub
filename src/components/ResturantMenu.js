import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utlis/useResturantMenu";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const resInfo = useResturantMenu(resid);
  const [openIndex, setOpenIndex] = useState(null);

  if (!resInfo) return <Shimmer />;

  // 🧠 Safely extract restaurant info (works for both live + mock)
  const restaurantInfoCard = resInfo?.cards?.find(
    (card) =>
      card?.card?.card?.info?.name ||
      card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );

  const info =
    restaurantInfoCard?.card?.card?.info ||
    restaurantInfoCard?.card?.info ||
    {};

  const { name = "Restaurant", cuisines = [], costForTwoMessage = "" } = info;

  // 🧠 Extract REGULAR cards for menu sections
  const regularCards = resInfo?.cards?.find(
    (card) => card?.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const menuSections = regularCards?.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="px-4 py-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-1">{name}</h1>
      <p className="text-gray-600 mb-6">
        {cuisines?.join(", ")} • {costForTwoMessage}
      </p>

      {menuSections?.map((section, index) => {
        const { title, itemCards } = section?.card?.card || {};
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full text-left px-4 py-3 font-semibold text-lg bg-gray-100 hover:bg-gray-200 transition-all duration-200"
            >
              {title} ({itemCards?.length || 0})
            </button>

            {isOpen && (
              <div className="px-4 py-3 bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {itemCards?.map((item, i) => {
                    const info = item?.card?.info || {};
                    return (
                      <div
                        key={`${info.id}-${i}`}
                        className="bg-white rounded-2xl shadow-md p-3 hover:shadow-lg transition duration-300"
                      >
                        {info.imageId && (
                          <img
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.imageId}`}
                            alt={info.name}
                            className="w-full h-40 object-cover rounded-xl mb-3"
                          />
                        )}
                        <h3 className="text-md font-semibold text-gray-800">
                          {info.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {info.description?.slice(0, 80) || "Tasty item"}
                        </p>
                        <p className="mt-1 text-blue-600 font-medium">
                          ₹{(info.price || info.defaultPrice || 0) / 100}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
