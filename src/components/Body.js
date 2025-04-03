import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] =
    useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.9582084&lng=77.1255055&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      console.log("API Response:", json);

      // Ensure 'cards' exists in API response
      if (!json?.data?.cards) {
        console.error("Invalid API response: No cards found");
        return;
      }

      // Extract restaurant list from API response
      const restaurantCard = json.data.cards.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      if (!restaurantCard) {
        console.error("No restaurant data found in API response");
        return;
      }

      let restaurantList =
        restaurantCard.card.card.gridElements.infoWithStyle.restaurants || [];

      console.log("Extracted Restaurants:", restaurantList);

      // Filter out invalid restaurant objects
      const validRestaurants = restaurantList.filter(
        (res) => res?.info?.id && res?.info
      );

      setListOfRestaurant(validRestaurants);
      setFilteredListOfRestaurant(validRestaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [searchText, setSearchText] = useState("");
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search for restaurants"
            className="search-box"
            value={searchText}
            onChange={(e)=>{
              setSearchText(e.target.value);
            }}
          />
          <button className="search-btn" onClick={()=>{
            //search Filter Logic
            const filteredList = listOfRestaurant.filter((res) =>
              res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredListOfRestaurant(filteredList);
            setSearchText("");
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic
            const filteredList = listOfRestaurant.filter(
              (res) => res.info?.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* Conditional Rendering */}
        {listOfRestaurant.length === 0 ? (
          <Shimmer />
        ) : (
          filteredListOfRestaurant.map((restaurant) =>
            restaurant?.info?.id ? (
              <ResturantCard
                key={restaurant.info.id}
                resData={restaurant.info}
              />
            ) : null
          )
        )}
      </div>
    </div>
  );
};

export default Body;
