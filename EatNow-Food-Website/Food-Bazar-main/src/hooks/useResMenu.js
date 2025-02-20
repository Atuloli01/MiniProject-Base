import { useState, useEffect } from "react";
import { resMenuUrl } from "../utils/constants";

const useResMenu = (resId) => {
  const [resMenuHeaderData, setResMenuHeaderData] = useState(null);
  const [resOfferData, setResOfferData] = useState([]);
  const [isPureVeg, setIsPureVeg] = useState("");
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const response = await fetch(resMenuUrl + resId);
    const json = await response.json();
    //console.log("Json: ", json);
    setResMenuHeaderData(json.data);

    // Restaurant Offers Data
    setResOfferData(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );

    //Pure Veg Filter Data
    setIsPureVeg(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card
        ?.card?.isPureVeg ?? false
    );

    // Restaurant Menu Data
    const menuCategory =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards?.filter(
        (category) =>
          category?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    setResMenu(menuCategory);
  };
  return {
    resMenuHeaderData,
    resOfferData,
    isPureVeg,
    resMenu,
  };
};
export default useResMenu;
