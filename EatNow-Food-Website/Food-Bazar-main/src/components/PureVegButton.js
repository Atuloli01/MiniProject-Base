import { useState } from "react";
import { LuLeaf } from "react-icons/lu";

const PureVegButton = ({ isPureVeg, veg }) => {
  const [showVegOnly, setShowVegOnly] = useState(false);
  const onFilterToggle = () => {
    setShowVegOnly(!showVegOnly);
    veg();
  };

  return isPureVeg === false ? (
    <div className="flex items-center h-3 transform translate-z-0">
      <div className="text-base font-semibold text-slate-700">Veg only</div>
      <button className="ml-3 border-none" onClick={onFilterToggle}>
        <span
          className={`toggle-switch ${
            showVegOnly ? "toggle-switch-color" : ""
          }`}
        >
          <span
            className={`toggle-switch-thumb ${
              showVegOnly ? "toggle-switch-on" : ""
            }`}
          ></span>
        </span>
      </button>
    </div>
  ) : (
    <div className="flex text-sm uppercase items-center font-semibold">
      <span className="flex">
        <LuLeaf style={{ transform: "rotate(270deg)", fill: "green" }} />
        <LuLeaf style={{ fill: "green", marginRight: "5px" }} />
      </span>
      Pure Veg
    </div>
  );
};

export default PureVegButton;
