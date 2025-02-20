import ResCard from "./ResCard";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import {
  handleFilterPriceGreaterThan300,
  handleFilterPriceLessThan300,
  handleFilterByDelivery,
  handleFilterByRating,
  handleFilterByVeg,
} from "../utils/handleFilter";

const OnlineRest = ({ resTitle, resData }) => {
  const restaurantsList = resData;
  const [filterRestaurant, setFilterRestaurants] = useState(resData);
  const [activeFilter, setActiveFilter] = useState(null);

  useEffect(() => {
    setFilterRestaurants(restaurantsList);
  }, [restaurantsList]);

  const handleRemoveFilter = () => {
    setActiveFilter(null), setFilterRestaurants(restaurantsList);
  };

  return (
    <div className="mx-[calc(3%+36px)] xl:mx-[calc(10%+36px)] md:mx-[calc(8%+36px)] sm:mx-[calc(6%+36px)] p-4">
      <div className="mb-4">
        <div className="text-base xl:text-xl font-bold">{resTitle}</div>
      </div>

      <div className="mb-4 h-11">
        <div
          className={`whitespace-nowrap w-28 mr-2 mb-2 inline-grid grid-cols-2 cursor-pointer border border-solid rounded-3xl text-sm border-gray-200 py-2 shadow-md hover:bg-orange-400 ${
            activeFilter == "filterByRating"
              ? "bg-orange-400 border-black px-3 w-32 gap-16"
              : "px-3"
          }`}
        >
          <button
            className="cursor-pointer text-sm"
            onClick={() =>
              handleFilterByRating(
                restaurantsList,
                setFilterRestaurants,
                setActiveFilter
              )
            }
          >
            Ratings 4.0+
          </button>
          {activeFilter == "filterByRating" && (
            <div className="ml-2 mt-1 content-center cursor-pointer ">
              <button onClick={handleRemoveFilter}>
                <RxCross2 />
              </button>
            </div>
          )}
        </div>

        <div
          className={`whitespace-nowrap w-28 mr-2 inline-grid grid-cols-2 cursor-pointer border border-solid rounded-3xl text-sm border-gray-200 py-2 shadow-md hover:bg-orange-400 ${
            activeFilter == "filterByDelivery"
              ? "bg-orange-400 border-black px-3 w-32 gap-16"
              : "px-3"
          }`}
        >
          <button
            className="cursor-pointer text-sm"
            onClick={() =>
              handleFilterByDelivery(
                restaurantsList,
                setFilterRestaurants,
                setActiveFilter
              )
            }
          >
            Fast Delivery
          </button>
          {activeFilter == "filterByDelivery" && (
            <div className="ml-2 mt-1 content-center cursor-pointer ">
              <button onClick={handleRemoveFilter}>
                <RxCross2 />
              </button>
            </div>
          )}
        </div>

        <div
          className={`whitespace-nowrap w-24 mr-2 inline-grid grid-cols-2 cursor-pointer border border-solid rounded-3xl text-sm border-gray-200 py-2 shadow-md hover:bg-orange-400 ${
            activeFilter == "filterByVeg"
              ? "bg-orange-400 border-black px-3 w-28 gap-12"
              : "px-4"
          }`}
        >
          <button
            className="cursor-pointer text-sm"
            onClick={() =>
              handleFilterByVeg(
                restaurantsList,
                setFilterRestaurants,
                setActiveFilter
              )
            }
          >
            Pure Veg
          </button>
          {activeFilter == "filterByVeg" && (
            <div className="ml-2 mt-1 content-center cursor-pointer ">
              <button onClick={handleRemoveFilter}>
                <RxCross2 />
              </button>
            </div>
          )}
        </div>

        <div
          className={`whitespace-nowrap w-40 mr-2 inline-grid grid-cols-2 cursor-pointer border border-solid rounded-3xl text-sm border-gray-200 py-2 shadow-md hover:bg-orange-400 ${
            activeFilter == "filterByLessThan300"
              ? "bg-orange-400 border-black px-3 w-44 gap-24"
              : "px-4"
          }`}
        >
          <button
            className="cursor-pointer text-sm"
            onClick={() =>
              handleFilterPriceLessThan300(
                restaurantsList,
                setFilterRestaurants,
                setActiveFilter
              )
            }
          >
            Less Than Rs. 300
          </button>
          {activeFilter == "filterByLessThan300" && (
            <div className="ml-2 mt-1 content-center cursor-pointer ">
              <button onClick={handleRemoveFilter}>
                <RxCross2 />
              </button>
            </div>
          )}
        </div>

        <div
          className={`whitespace-nowrap w-36 mr-2 inline-grid grid-cols-2 cursor-pointer border border-solid rounded-3xl text-sm border-gray-200 py-2 shadow-md hover:bg-orange-400 ${
            activeFilter == "filterByGreaterThan300"
              ? "bg-orange-400 border-black px-3 w-44 gap-24"
              : "px-4"
          }`}
        >
          <button
            className="cursor-pointer text-sm"
            onClick={() =>
              handleFilterPriceGreaterThan300(
                restaurantsList,
                setFilterRestaurants,
                setActiveFilter
              )
            }
          >
            Rs. 300-Rs. 600
          </button>
          {activeFilter == "filterByGreaterThan300" && (
            <div className="ml-2 mt-1 content-center cursor-pointer ">
              <button onClick={handleRemoveFilter}>
                <RxCross2 />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-12 lg:mt-6 xl:mt-4 gap-8 items-start">
        {filterRestaurant.reverse().map((restaurant) => (
          <ResCard key={restaurant?.info?.id} resData={restaurant?.info} />
        ))}
      </div>
    </div>
  );
};

export default OnlineRest;
