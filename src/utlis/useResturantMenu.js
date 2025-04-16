import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useResturantMenu = (resid) => {
  const [resInfo, setResInfo] = useState(null);
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
  return resInfo;
};
export default useResturantMenu;
