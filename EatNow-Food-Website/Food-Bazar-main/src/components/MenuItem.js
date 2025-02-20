import { MdCurrencyRupee } from "react-icons/md";
import { menuItemsUrl } from "../utils/constants";
import veg from "../img/veg.png";
import nonVeg from "../img/nonVeg.png";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { incrementItemCount, addItems } from "../../store/cartSlice";
import AddItemButton from "./AddItemButton";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const MenuItem = ({ data }) => {
  const info = data;
  const {
    id,
    name,
    price,
    defaultPrice,
    description,
    imageId,
    itemAttribute,
    isBestseller,
  } = info ?? " ";

  const [itemCount, setItemCount] = useState(0);
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.items);

  const handleClick = () => {
    if (cartItem[id] === undefined) {
      dispatch(addItems(info));
      toast.success("Item Added to cart");
      setItemCount(1);
    } else {
      dispatch(incrementItemCount(id));
      setItemCount(cartItem[id].count);
      toast.success("Item added to cart");
    }
  };

  useEffect(() => {
    if (info && cartItem[id]) {
      setItemCount(cartItem[id].count);
    }
  }, [cartItem, info, setItemCount]);

  return (
    <div className="mt-4 pb-3">
      <div className="flex justify-between items-start">
        <div className="w-9/12">
          <div className="flex">
            {itemAttribute?.vegClassifier === "VEG" ? (
              <img className="w-4 h-4" src={veg}></img>
            ) : (
              <img className="w-4 h-4" src={nonVeg}></img>
            )}
            {isBestseller ? (
              <span className="ml-2 text-sm text-yellow-500">
                <FaStar
                  style={{
                    fontSize: "0.9rem",
                    marginRight: "5px",
                    color: "#ee9c00",
                    display: "inline",
                  }}
                />
                Bestseller
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="mt-1">
            <h3 className="mr-1 text-base font-medium break-words">{name}</h3>
          </div>
          <div className="flex mt-1 text-sm mr-2">
            <MdCurrencyRupee />
            <span className="-mt-[2px]">
              {price ? price / 100 : defaultPrice / 100}
            </span>
          </div>
          {description !== undefined ? (
            <div className="mt-3 leading-normal w-full tracking-tight text-sm text-gray-400">
              {description}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="relative max-w-32 min-w-28 pt-5 mx-4">
          <button className="absolute left-6 top-32 w-2/3 h-8 bg-slate-50 shadow-md rounded-md border-[1px] border-solid border-slate-300">
            {itemCount == 0 ? (
              <div
                className="text-green-600 text-sm font-medium"
                onClick={handleClick}
              >
                ADD
              </div>
            ) : (
              <AddItemButton
                itemCount={itemCount}
                setItemCount={setItemCount}
                data={info}
              ></AddItemButton>
            )}
          </button>
          {imageId !== undefined ? (
            <img
              className="object-cover rounded-md w-full h-32"
              src={menuItemsUrl + imageId}
              alt={name}
            />
          ) : (
            <div
              className="w-full h-32 text-center rounded-md object-cover text-sm text-gray-400"
              style={{ backgroundColor: "#f0f0f0" }}
            >
              {" "}
              Image not available{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default MenuItem;
