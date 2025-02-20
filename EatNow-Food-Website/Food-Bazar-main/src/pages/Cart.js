import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/cartSlice";
import { Link } from "react-router-dom";
import { emptyCart } from "../utils/constants";
import MenuItem from "../components/MenuItem";
import { MdCurrencyRupee } from "react-icons/md";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const cartData = Object.values(cartItems);
  const itemCount = cartData.reduce((acc, item) => {
    return (acc += item.count);
  }, 0);

  const totalAmount = cartData.reduce((acc, item) => {
    return (acc += (item.count * item.price) / 100);
  }, 0);

  const handleClick = () => {
    dispatch(clearCart());
  };

  return itemCount === 0 ? (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <img
        className="w-3/4 h-1/3 sm:w-1/2 max-w-md"
        src={emptyCart}
        alt="cart empty image"
      />
      <h2 className="text-xl font-bold pt-3">Your cart is empty</h2>
      <p className="max-w-fit text-xs text-gray-400">
        You can go to home page to view more restaurants
      </p>
      <Link to="/">
        <button className="mt-4 text-white p-3 text-sm bg-orange-500">
          SEE RESTAURANTS NEAR YOU
        </button>
      </Link>
    </div>
  ) : (
    <div className="h-full bg-gray-200">
      <div className="block max-w-5xl h-screen mx-auto px-20 py-8 bg-slate-50 ">
        <div className=" sm:text-2xl font-bold my-6 flex justify-between">
          <h1>Cart Items: </h1>
          <button
            onClick={handleClick}
            className="bg-orange-600 text-white text-lg font-sans border-0 px-4 py-2"
          >
            Clear Cart
          </button>
        </div>
        <hr></hr>
        <div className="my-10">
          {Object.keys(cartItems).map((itemId) => (
            <MenuItem key={itemId} data={cartItems[itemId]} />
          ))}
        </div>

        <hr></hr>
        <div className="flex mt-8 p-2 justify-between">
          <div className="">To Pay : </div>
          <div className="flex">
            <MdCurrencyRupee />
            <div className="-mt-[3px]">{totalAmount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
