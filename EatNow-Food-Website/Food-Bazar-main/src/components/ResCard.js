import { MdStars } from "react-icons/md";
import { Link } from "react-router-dom";
const ResCard = (props) => {
  const { resData } = props;
  const {
    id,
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    locality,
    aggregatedDiscountInfoV3,
    sla,
  } = resData;

  //console.log("ResData: ", resData);

  let iconStyle = { color: "green", fontSize: "1.5rem" };

  return (
    <div>
      <Link to={"/restaurant/" + id} style={{ textDecoration: "none" }}>
        <div className="grid cursor-pointer gap-3 justify-stretch items-center transition-all grid-flow-row hover:drop-shadow-lg hover:scale-90">
          <div className="relative before: h-0 block pt-[calc(66.66%)]">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="res-logo"
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    cloudinaryImageId
                  }
                />

                <div className="absolute bottom-0 left-0 right-0 grid content-end text-left px-3 pb-2 h-[calc(81px)] bg-gradient-to-b from-transparent to-gray-900">
                  <div className="text-xl text-slate-50 overflow-hidden w-full font-extrabold line-clamp-1">
                    {(aggregatedDiscountInfoV3?.header ?? " ") +
                      " " +
                      (aggregatedDiscountInfoV3?.subHeader ?? " ")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-4">
            <div className="line-clamp-1 text-lg font-semibold tracking-wide text-slate-950">
              {name}
            </div>
            <p className="flex">
              <MdStars style={iconStyle} />

              <span className="line-clamp-1 text-lg font-medium tracking-wide text-slate-950">
                {avgRating + " . " + sla?.slaString}
              </span>
            </p>
            <p className="line-clamp-1 text-base text-slate-500">
              {cuisines.join(", ")}
            </p>
            <p className="line-clamp-1 text-base text-slate-500">{locality}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ResCard;
