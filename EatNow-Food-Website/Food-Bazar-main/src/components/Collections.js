import React from "react";
import { Link, useParams } from "react-router-dom";
import useCollectionData from "../hooks/useCollectionData";
import ResCard from "./ResCard";

const Collections = () => {
  const { id } = useParams();
  const { restaurantData, pageTitle, pageDescription } = useCollectionData(id);

  return (
    <div className="mt-20 p-2 w-3/5 mx-auto md:mt-20 lg:mt-20">
      <div className="my-3 md:my-5 lg:my-6">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-gray-800 ">
          {pageTitle}
        </h1>
        <p className=" text-gray-700">{pageDescription}</p>
      </div>
      <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-5">
        Restaurants to explore
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {restaurantData.map((data) => (
          <ResCard
            id={data?.card?.card?.info?.id}
            resData={data?.card?.card?.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Collections;
