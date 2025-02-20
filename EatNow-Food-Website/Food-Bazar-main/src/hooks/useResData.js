import { useState, useEffect } from "react";
import { resURL } from "../utils/constants";

const useResData = () => {
  const [bannerData, setBannerData] = useState([]);
  const [topResTitle, setTopRestTitle] = useState("");
  const [topRestaurant, setTopRestaurant] = useState([]);
  const [resTitle, setResTitle] = useState("");
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(resURL);
    const restaurantData = await data.json();
    //console.log("Restaurant Data: ", restaurantData);
    //Banner Data
    setBannerData(
      restaurantData?.data?.cards[0]?.card?.card?.imageGridCards?.info.map(
        (bannerInfo) => ({
          id: bannerInfo.id,
          imageId: bannerInfo.imageId,
          action: bannerInfo.action,
        })
      )
    );
    // Top Restautants
    setTopRestaurant(
      restaurantData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setTopRestTitle(restaurantData?.data?.cards[1]?.card?.card?.header?.title);

    //Online Restaurants
    setListOfRestaurant(
      restaurantData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setResTitle(restaurantData?.data?.cards[2]?.card?.card?.title);
  };

  return {
    bannerData,
    topResTitle,
    topRestaurant,
    resTitle,
    listOfRestaurants,
  };
};

export default useResData;
