import { LuBadgePercent } from "react-icons/lu";
const ResOffer = (props) => {
  const { couponCode, description, header, offerTag } = props?.data?.info;
  let iconStyle = {
    fontSize: "1.2rem",
    color: "brown",
    verticalAlign: "bottom",
    marginRight: "7px",
    display: "inline",
  };
  return (
    <div className="mr-3">
      <div className="flex border-[1px] border-solid rounded-lg p-2 h-full min-w-60 items-center">
        <div className="flex">
          <div className="my-1 ml-2 flex flex-col justify-center">
            <div className="text-base font-semibold whitespace-nowrap text-gray-800 font-sans">
              <LuBadgePercent style={iconStyle} />
              {header}
            </div>
            <div className="text-xs text-slate-500 mt-1 text-ellipsis overflow-hidden whitespace-nowrap max-w-52 font-sans font-semibold flex">
              {couponCode + " | " + description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResOffer;
