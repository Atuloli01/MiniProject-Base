import { useState, useEffect } from "react";
import { LuSearch } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import PopularCuisine from "../components/Search/PopularCuisine";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_SUGGESTIONS_API_URL } from "../utils/constants";
import { cacheResults } from "../../store/cacheSlice";
import { Link } from "react-router-dom";
import SearchCard from "../components/Search/SearchCard";
import SearchRes from "../components/Search/SearchRes";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [showResDetail, setShowResDetail] = useState(false);
  const [searchParams] = useSearchParams();
  let query = searchParams.get("query");

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSearchData(searchCache[searchText]);
      } else {
        fetchData();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const fetchData = async () => {
    try {
      const response = await fetch(SEARCH_SUGGESTIONS_API_URL + searchText);
      const json = await response.json();
      setSearchData(json?.data?.suggestions);
      dispatch(
        cacheResults({
          [searchText]: json?.data?.suggestions,
        })
      );
    } catch (error) {
      //console.log("Error while fetching data: ", error);
    }
  };

  useEffect(() => {
    query && setSearchText(query);
  }, [query]);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="p-2 lg:w-4/5 xl:w-[1100px] m-auto mt-3 md:mt-5 xl:mt-6 relative">
      <div className="z-5 sticky top-14 lg:top-16 pt-2 sm:pt-6 md:pt-10 bg-white z-10">
        <span className="absolute right-3 translate-y-1/2 cursor-pointer ">
          {!searchText ? (
            <LuSearch size={25} className="text-gray-600" />
          ) : (
            <RxCross2
              size={25}
              className="text-gray-600"
              onClick={() => setSearchText("")}
            />
          )}
        </span>

        <input
          className="w-full text-lg border border-gray-400 rounded-sm mb-4 outline-0 font-sans align-middle overflow-hidden text-ellipsis px-4 py-3"
          type="text"
          value={searchText}
          onChange={handleInputChange}
          onClick={() => setShowResDetail(false)}
          placeholder="Search for restaurants and food"
        />
      </div>
      {showResDetail && <SearchRes />}
      {!searchData && <PopularCuisine />}
      {!showResDetail &&
        searchData?.map((restaurant, i) => (
          <Link
            onClick={() => setShowResDetail(true)}
            to={`/search?query=${restaurant?.text}&selectedPLTab=${restaurant.type}`}
            key={`${restaurant?.cloudinaryId}-${i}`}
          >
            <SearchCard restaurant={restaurant} />
          </Link>
        ))}
    </div>
  );
};

export default Search;
