import React from "react";
import RestaurantCardShimmer from "./RestaurantCardShimmer";
const OffersShimmer = () => {
  return (
    <div className="flex flex-col w-full h-full pt-4">
      <div className="mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <RestaurantCardShimmer />
        <RestaurantCardShimmer />
        <RestaurantCardShimmer />
        <RestaurantCardShimmer />
        <RestaurantCardShimmer />
        <RestaurantCardShimmer />
        <RestaurantCardShimmer />
        <RestaurantCardShimmer />
        <RestaurantCardShimmer />
      </div>
    </div>
  );
};

export default OffersShimmer;
