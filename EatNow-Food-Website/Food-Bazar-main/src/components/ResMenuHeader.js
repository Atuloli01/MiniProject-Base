import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { LuClock8 } from "react-icons/lu";
import { HiOutlineCurrencyRupee } from "react-icons/hi";

const ResMenuHeader = (props) => {
  const { data } = props;

  const {
    name,
    cuisines,
    city,
    sla,
    areaName,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
  } = data?.cards[2]?.card?.card?.info || {};

  let iconStyle = {
    fontSize: "1.3rem",
    verticalAlign: "bottom",
    display: "inline",
  };

  let ratingIcon = {
    display: "inline",
    marginRight: "0.3rem",
    verticalAlign: "middle",
  };
  return (
    <div>
      <div className="h-7 text-xs flex text-gray-400 items-center relative mx-auto z-[7]">
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
          <span className="mr-1">Home</span>
        </Link>
        <span className="mr-1">/</span>
        <span className="mr-1">{city}</span>
        <span className="mr-1">/</span>
        <span className="mr-1" style={{ color: "#535665" }}>
          {name}
        </span>
      </div>
      <div className="flex sticky top-0 left-0 w-full overflow-hidden h-16 z-[6] items-center border-b-4 border-solid border-transparent opacity-0 -mt-10">
        <div>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap text-sm font-semibold text-slate-600">
            {name}
          </div>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap text-sm font-semibold text-slate-600">
            {sla?.slaString}
          </div>
        </div>
      </div>
      <div className="mx-4">
        <div className="pt-4 mb-4">
          <div className="inline-block mr-4">
            <p className="text-xl font-semibold text-slate-900 mb-2">{name}</p>
            <p className="text-sm text-gray-400 overflow-hidden text-ellipsis mb-1">
              {cuisines?.join(", ")}
            </p>
            <p className="text-sm text-gray-400 overflow-hidden text-ellipsis mb-1">
              {areaName + ", " + sla?.lastMileTravelString}
            </p>
          </div>
          <div className="border-[1px] border-solid rounded-md text-center p-2 max-w-24 float-right">
            <span className="block pb-2 border-b-[1px] border-solid font-bold mb-2 justify-between text-green-600">
              <FaStar style={ratingIcon} />
              {avgRatingString}
            </span>
            <span className="font-serif text-xs font-medium">
              {totalRatingsString}
            </span>
          </div>
        </div>
        <hr
          style={{ borderBottom: "1px dashed #d3d3d3", marginBottom: "18px" }}
        ></hr>
        <div className="text-sm font-bold text-slate-700">
          <div className="inline-block mr-4">
            <LuClock8 style={iconStyle} />
            <span className="ml-2">{sla?.slaString}</span>
          </div>
          <div className="inline-block">
            <HiOutlineCurrencyRupee style={iconStyle} />
            <span className="ml-2">{costForTwoMessage}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResMenuHeader;
