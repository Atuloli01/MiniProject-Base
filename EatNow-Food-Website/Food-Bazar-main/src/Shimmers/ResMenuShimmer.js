import React from "react";
import RestaurantCardShimmer from "./RestaurantCardShimmer";

const ResMenuShimmer = () => {
  return (
    <div className="max-w-4xl mt-24 mx-auto">
      <div className="mx-auto grid grid-cols-2 gap-2">
        {/* Shimmer */}
        <div className="grid mt-7 p-2 animate-pulse">
          <div className="h-60 w-2/2 bg-slate-200"></div>
          <div className="mt-4 ml-1 h-20 w-64">
            <div className="bg-slate-200 w-40 h-2"></div>
            <div className="mt-2 bg-slate-200 w-32 h-2"></div>
          </div>
        </div>

        <div className="grid mt-7 p-2 animate-pulse">
          <div className="h-60 w-2/2 bg-slate-200"></div>
          <div className="mt-4 ml-1 h-20 w-64">
            <div className="bg-slate-200 w-40 h-2"></div>
            <div className="mt-2 bg-slate-200 w-32 h-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResMenuShimmer;
