import { MdKeyboardArrowUp } from "react-icons/md";
import MenuItem from "./MenuItem";
import { useState } from "react";
import { menuItemsUrl } from "../utils/constants";

const MenuCategoryContainer = ({ resMenu, isVeg, showItem, showIndex }) => {
  //console.log("resMenu: ", resMenu);
  const { title } = resMenu?.card?.card;
  const { itemCards } = resMenu?.card?.card;

  const menuItem =
    itemCards !== undefined
      ? isVeg
        ? itemCards.filter((items) => items?.card?.info?.isVeg)
        : itemCards
      : "";

  //console.log("MenuItems: ", menuItem);
  const handleShowItem = () => {
    showIndex();
  };

  return (
    <div>
      <button
        id="menuDropDown"
        onClick={handleShowItem}
        className="w-full flex justify-between text-xl"
      >
        <div className="font-bold text-xl">{`${title} (${itemCards.length})`}</div>
        <span>
          <MdKeyboardArrowUp
            style={{
              fontSize: "1.6rem",
              transform: showItem ? "rotate(360deg)" : "rotate(180deg)",
            }}
          />
        </span>
      </button>
      {showItem && (
        <div>
          {menuItem.map((items) => (
            <div>
              <MenuItem
                key={items?.card?.info?.id}
                data={items?.card?.info}
                isVeg={isVeg}
              />
              <div className="border-b-[0.5px] border-solid border-gray-300 my-5"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default MenuCategoryContainer;
