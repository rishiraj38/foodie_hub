import { useState, useEffect } from "react";
import { MENU_API } from "./constants";
import mockResMenuData from "../components/mocks/mockResMenu.json"; 

const useRestaurantMenu = (resid) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resid]);

  const fetchData = async () => {
    try {
      const response = await fetch(MENU_API + resid);
      if (!response.ok) throw new Error("API failed");
      const json = await response.json();
      setResInfo(json?.data);
      console.log(json?.data);
    } catch (error) {
      console.log(error);
      setResInfo(mockResMenuData?.data);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
