import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import mockResListData from "./mocks/mockResListData.json";
import useOnlineStatus from "../utlis/useOnlineStatus";

const Body = () => {
  const [listOfresturant, setListOfresturant] = useState([]);
  const [filteredListOfresturant, setFilteredListOfresturant] = useState([]);
  const [searchText, setSearchText] = useState("");

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

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      console.log("Live API Response:", json);

      const restaurantList = extractRestaurantList(json?.data);
      if (restaurantList.length === 0) {
        throw new Error("No restaurants in live API");
      }

      setListOfresturant(restaurantList);
      setFilteredListOfresturant(restaurantList);
    } catch (error) {
      console.log("Error fetching live data:", error);
      console.log("Falling back to mock data");

      const mockList = extractRestaurantList(mockResListData?.data);
      setListOfresturant(mockList);
      setFilteredListOfresturant(mockList);
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
      <div className="offline">
        <h1>Offline</h1>
        <h2>Please check your internet connection</h2>
      </div>
    );
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search for restaurants"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfresturant.length === 0 ? (
          <Shimmer />
        ) : (
          filteredListOfresturant.map((resturant) =>
            resturant?.info?.id ? (
              <Link
                to={`/resturant/${resturant.info.id}`}
                key={resturant.info.id}
              >
                <ResturantCard resData={resturant.info} />
              </Link>
            ) : null
          )
        )}
      </div>
    </div>
  );
};

export default Body;
