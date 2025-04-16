import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utlis/constants";
import useResturantMenu from "../utlis/useResturantMenu";

const RestaurantMenu = () => {
  const { resid } = useParams(); 

  const resInfo = useResturantMenu(resid); //Custom HOOK

  if (!resInfo) return <Shimmer />; 

  // Extracting the menu items
  const regularCards = resInfo?.cards?.find(
    (card) => card?.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemCards = regularCards
    ?.map((card) => card?.card?.card?.itemCards)
    ?.filter(Boolean)
    ?.flat();

  // Extracting name, cuisines, and cost information
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
