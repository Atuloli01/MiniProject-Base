import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SEARCH_API_URL } from "../../utils/constants";
import SearchDish from "./SearchDish";
import SearchResCard from "./SearchResCard";
import { Link } from "react-router-dom";
import RestaurantCardShimmer from "../../Shimmers/RestaurantCardShimmer";

const SearchRes = () => {
  const [resInfo, setResInfo] = useState([]);
  const [dishInfo, setDishInfo] = useState([]);
  const [searchParams] = useSearchParams();

  let query = searchParams.get("query");
  let selectedPLTab = searchParams.get("selectedPLTab");

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchData = async () => {
    let response;

    if (selectedPLTab === "DISH") {
      response = await fetch(SEARCH_API_URL + query + "&selectedPLTab=DISH");
    } else {
      response = await fetch(
        SEARCH_API_URL + query + "&selectedPLTab=RESTAURANT"
      );
    }

    const json = await response.json();

    if (selectedPLTab === "DISH") {
      setDishInfo(json?.data?.cards[0]?.groupedCard?.cardGroupMap?.DISH?.cards);
    } else {
      setResInfo(
        json?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
      );
    }
  };
  if ((!resInfo || !resInfo.length) && (!dishInfo || !dishInfo.length)) {
    return <RestaurantCardShimmer />;
  }

  return selectedPLTab === "DISH" ? (
    <SearchDish dishInfo={dishInfo} />
  ) : (
    <div className="w-full border bg-gray-50 rounded-lg">
      <div className="w-full p-2">
        <Link
          to={`/restaurant/${resInfo[0]?.card?.card?.info?.id}`}
          key={resInfo[0]?.card?.card.info?.id}
        >
          <SearchResCard
            restaurant={resInfo[0]?.card?.card}
            resCost={resInfo[0]?.card?.card?.info?.costForTwoMessage}
          />
        </Link>
      </div>
      <h1 className="my-4 mt-10 px-3 font-semibold">More results like this</h1>
      <div className="w-full sm:p-2">
        {resInfo &&
          resInfo?.map((item) => (
            <Link
              to={`/restaurant/${item?.card?.card?.info?.id}`}
              key={item?.card?.card?.info?.id}
            >
              <SearchResCard restaurant={item?.card?.card} />
            </Link>
          ))}
      </div>
    </div>
  );
};
export default SearchRes;
