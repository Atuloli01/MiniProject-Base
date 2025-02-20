import ResMenuHeader from "../components/ResMenuHeader";
import useResMenu from "../hooks/useResMenu";
import { useParams } from "react-router-dom";
import ResOffer from "../components/ResOffer";
import PureVegButton from "../components/PureVegButton";
import MenuCategoryContainer from "../components/MenuCategoryContainer";
import { useState } from "react";
import ResMenuShimmer from "../Shimmers/ResMenuShimmer";

const ResMenu = () => {
  const { resId } = useParams();
  const { resMenuHeaderData, resOfferData, isPureVeg, resMenu } =
    useResMenu(resId);

  const [showIndex, setShowIndex] = useState(0);
  const [isVeg, setIsVeg] = useState(false);

  //console.log("ResMenu: ", resMenu);
  //console.log("Veg: ", isVeg);
  return resMenu.length === 0 ? (
    <ResMenuShimmer />
  ) : (
    <div className="block max-w-4xl mt-4 mx-auto">
      <ResMenuHeader data={resMenuHeaderData} />
      <div className="pb-4 px-3 mt-5">
        <div className="flex overflow-x-auto overflow-y-hidden flex-col w-full">
          <div className="flex">
            {resOfferData.map((resOffer) => (
              <ResOffer key={resOffer?.info?.offerIds[0]} data={resOffer} />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 ml-4">
        <PureVegButton isPureVeg={isPureVeg} veg={() => setIsVeg(!isVeg)} />
      </div>
      <hr
        style={{
          borderBottom: "1px solid #d3d3d3",
          margin: "18px 0 0 18px",
        }}
      ></hr>
      {resMenu.map((menuCategory, index) => (
        <div>
          <div className="mt-6 mx-4 mb-4">
            <MenuCategoryContainer
              id={menuCategory?.card?.card?.title}
              resMenu={menuCategory}
              isVeg={isVeg}
              showItem={index == showIndex ? true : false}
              showIndex={() => setShowIndex(index)}
            />
          </div>

          <div className="h-4 border-b-8 border-solid"></div>
        </div>
      ))}
    </div>
  );
};
export default ResMenu;
