import useResData from "../hooks/useResData";
import ResCard from "../components/ResCard";
import { Link } from "react-router-dom";
import OffersShimmer from "../Shimmers/OffersShimmer";

const Offers = () => {
  const { topRestaurant } = useResData();

  return (
    <div className="mb-4 mt-4 flex w-full flex-col justify-center items-center">
      <div className="mb-4 mt-8 xs:mt-0 flex xl:w-4/6 lg:w-5/6 flex-col justify-start">
        <h1 className=" mb-2 text-2xl font-bold xs:text-lg">
          Best offers with online food delivery
        </h1>

        {topRestaurant.length === 0 || topRestaurant == undefined ? (
          <OffersShimmer />
        ) : (
          <div className="mt-8 grid xl:grid-cols-4 items-center lg:grid-cols-3 md:grid-cols-2 gap-6">
            {topRestaurant?.slice(0, 10).map((restaurant) => (
              <Link
                to={`${restaurant.info.name}/${restaurant.info.id}`}
                key={restaurant.info.id}
              >
                <ResCard resData={restaurant?.info} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Offers;
