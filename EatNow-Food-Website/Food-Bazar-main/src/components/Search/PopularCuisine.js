import { useEffect, useState } from "react";
import { popCuisines, imgCusUrl } from "../../utils/constants";
import { Link } from "react-router-dom";

const extractCuisinesName = (url) => {
  const regex = /query=([a-zA-Z]+)/;
  const match = url.match(regex);
  return match && match[1];
};

const PopularCuisine = () => {
  const [listPopularCuisines, setListPopularCuisines] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchPopCuisine();
  }, []);

  const fetchPopCuisine = async () => {
    try {
      const data = await fetch(popCuisines);
      const popCuisinesData = await data.json();

      setListPopularCuisines(
        popCuisinesData?.data?.cards[1]?.card?.card?.imageGridCards?.info
      );
      setTitle(popCuisinesData?.data?.cards[1]?.card?.card?.header?.title);
    } catch (error) {
      //console.error("Error Fetching Data: ", error);
    }
  };

  return (
    <div className="relative w-[1100px] my-2 mx-auto pt-7 pl-4">
      <div className="text-2xl font-bold text-slate-950 font-sans">{title}</div>
      <div className="mt-2 mb-2 flex overflow-y-hidden overflow-x-auto">
        {listPopularCuisines.map((item) => (
          <Link
            to={`/search?query=${extractCuisinesName(item?.entityId)}`}
            key={item?.id}
          >
            <div className="min-w-32 min-h-40">
              <img src={imgCusUrl + item.imageId} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularCuisine;
