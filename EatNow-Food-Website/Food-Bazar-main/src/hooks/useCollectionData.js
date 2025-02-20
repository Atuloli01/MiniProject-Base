import { useState, useEffect } from "react";
import { COLLECTION_API_URL } from "../utils/constants.js";

const useCollectionData = (id) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [pageTitle, setPageTitle] = useState("");
  const [pageDescription, setPageDescription] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(COLLECTION_API_URL + id);
    const json = await response.json();

    setPageTitle(json?.data?.cards[0]?.card?.card?.title);
    setPageDescription(json?.data?.cards[0]?.card?.card?.description);

    const restaurants = json?.data?.cards.filter(
      (restaurant) =>
        restaurant?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );

    setRestaurantData(restaurants);
  };
  return {
    restaurantData,
    pageTitle,
    pageDescription,
  };
};

export default useCollectionData;
