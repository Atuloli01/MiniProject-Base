import { useDispatch, useSelector } from "react-redux";
import { decrementItemCount, incrementItemCount } from "../../store/cartSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

const AddItemButton = ({ itemCount, setItemCount, data }) => {
  const id = data?.id;
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.items);

  // Watch for changes in cartItem and update setItemCount
  useEffect(() => {
    if (cartItem[id] === undefined) setItemCount(0);
    if (data && cartItem[id]) {
      setItemCount(cartItem[id].count);
    }
  }, [cartItem, data, setItemCount]);

  const decrement = () => {
    dispatch(decrementItemCount(id));
    toast.success("Item removed from cart");
  };

  const increment = () => {
    dispatch(incrementItemCount(id));
    toast.success("Item added to cart");
  };
  return (
    <div className="flex justify-between text-lg leading-none py-2 ">
      <div
        onClick={decrement}
        className="flex justify-center items-center w-1/3  "
      >
        -
      </div>
      <div className="w-1/3">{itemCount}</div>
      <div
        onClick={increment}
        className="flex justify-center items-center w-1/3 "
      >
        +
      </div>
    </div>
  );
};

export default AddItemButton;
