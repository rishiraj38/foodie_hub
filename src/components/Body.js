import { useEffect, useState } from "react";
import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import mockResListData from "./mocks/mockResListData.json";
import useOnlineStatus from "../utlis/useOnlineStatus";
import Footer from "./Footer";

const Body = () => {
  const [listOfresturant, setListOfresturant] = useState([]);
  const [filteredListOfresturant, setFilteredListOfresturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(ResturantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const extractRestaurantList = (data) => {
    return (
      data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.9582084&lng=77.1255055&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) throw new Error("Network response was not ok");

      const json = await response.json();
      const restaurantList = extractRestaurantList(json?.data);

      if (restaurantList.length === 0)
        throw new Error("No restaurants in live API");

      setListOfresturant(restaurantList);
      setFilteredListOfresturant(restaurantList);
    } catch (error) {
      console.log("Error fetching live data:", error);

      const mockList = extractRestaurantList(mockResListData?.data);
      if (mockList.length === 0) {
        console.log("❌ Mock data is also empty!");
      } else {
        setListOfresturant(mockList);
        setFilteredListOfresturant(mockList);
      }
    }
  };

  const handleSearch = () => {
    const filteredList = listOfresturant.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredListOfresturant(filteredList);
    setSearchText("");
  };

  const handleFilter = () => {
    const filteredList = listOfresturant.filter(
      (res) => res?.info?.avgRating > 4
    );
    setFilteredListOfresturant(filteredList);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-red-50 text-center">
        <h1 className="text-3xl font-bold text-red-600">⚠️ You're Offline</h1>
        <p className="text-lg text-gray-700 mt-2">
          Please check your internet connection
        </p>
      </div>
    );
  }

  return (
    <div className="body px-4 py-6 bg-gradient-to-br from-blue-50 to-purple-100 p-6 min-h-screen">
      <div className="filter flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="search flex gap-2 w-full md:w-auto">
          <input
            type="text"
            className="border border-gray-400 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300 w-full md:w-64"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <button
          className="bg-blue-100 text-blue-800 px-6 py-2 rounded-lg font-medium hover:bg-blue-200 transition-all"
          onClick={handleFilter}
        >
          ⭐ Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="res-container flex flex-wrap justify-center ">
        {listOfresturant.length === 0 ? (
          <Shimmer />
        ) : (
          filteredListOfresturant.map((restaurant) =>
            restaurant?.info?.id ? (
              <Link
                to={`/resturant/${restaurant.info.id}`}
                key={restaurant.info.id}
              >
                {restaurant?.data?.promoted ? (
                  <RestaurantCardPromoted resData={restaurant.info} />
                ) : (
                  <ResturantCard resData={restaurant.info} />
                )}
              </Link>
            ) : null
          )
        )}
      </div>

      {/* Footer */}
      <div className="mt-10">{listOfresturant.length > 0 && <Footer />}</div>
    </div>
  );
};

export default Body;
