import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utlis/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resid } = useParams(); 
  console.log("resid", resid);

  useEffect(() => {
    fetchData();
  }, [resid]); 

  const fetchData = async () => {
    try {
      const response = await fetch(MENU_API + resid); 
      const json = await response.json();
      setResInfo(json?.data); 
      console.log("API Response:", json?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!resInfo) return <Shimmer />; 

  // Extracting the menu items
  const regularCards = resInfo?.cards?.find(
    (card) => card?.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemCards = regularCards
    ?.map((card) => card?.card?.card?.itemCards)
    ?.filter(Boolean)
    ?.flat();


  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item, index) => (
          <li key={`${item.card.info.id}-${index}`}>
            {item.card.info.name} - ₹
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
