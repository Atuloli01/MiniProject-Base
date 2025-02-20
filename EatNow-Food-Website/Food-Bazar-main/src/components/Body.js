import Banner from "./Banner";
import TopRest from "./TopRest";
import OnlineRest from "./OnlineRest";
import HomeShimmer from "../Shimmers/HomeShimmer";
import useResData from "../hooks/useResData";
const Body = () => {
  const {
    bannerData,
    topResTitle,
    topRestaurant,
    resTitle,
    listOfRestaurants,
  } = useResData();

  //console.log("List Of Restaurants: ", listOfRestaurants);
  return listOfRestaurants == undefined || listOfRestaurants.length === 0 ? (
    <HomeShimmer />
  ) : (
    <div className="w-full h-full z-20">
      <Banner data={bannerData} />
      <hr className="border-solid border-1 border-[rgb(240, 240, 245)] m-2 calc(10% + 52px)"></hr>

      <TopRest resData={topRestaurant} resTitle={topResTitle} />
      <hr className="border-solid border-1 border-[rgb(240, 240, 245)] m-6 calc(10% + 52px)"></hr>

      <OnlineRest resTitle={resTitle} resData={listOfRestaurants} />
    </div>
  );
};

export default Body;
