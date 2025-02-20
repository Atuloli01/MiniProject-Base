import { RxCross2 } from "react-icons/rx";
import { loginImg } from "../utils/constants";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState, useRef } from "react";
import { checkSignInData, checkSignUpData } from "../utils/validate";

const Login = ({ isOpen, onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    let message = null;
    if (isSignIn) {
      message = checkSignInData(email.current.value, password.current.value);
      setErrorMessage(message);
      if (message) return;
    } else {
      message = checkSignUpData(
        name.current.value,
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
      if (message) return;
    }
  };
  return (
    <div className="">
      <div
        className={`fixed inset-y-0 right-0 z-50 bg-white lg:w-4/12 w-8/12 transform transition-transform ease-in-out duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="m-8 p-3">
          <button onClick={onClose}>
            <RxCross2 size={30} />
          </button>

          <div className="w-full flex xs:m-0">
            <form
              className="flex flex-col w-[450px] p-4 gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex justify-between">
                <div>
                  <h1 className="text-3xl font-medium mb-2">
                    {isSignIn ? "SignIn" : "SignUp"}
                  </h1>
                  <p>
                    or{" "}
                    <span
                      onClick={toggleSignInForm}
                      className="text-orange-500 cursor-pointer"
                    >
                      create an account
                    </span>
                  </p>
                </div>
                <img src={loginImg} alt="loginImg" className="w-24 -m-3" />
              </div>

              {!isSignIn ? (
                <input
                  ref={name}
                  type="text"
                  placeholder="Full Name"
                  className="mt-12 border border-black p-3 w-full rounded font-medium"
                />
              ) : (
                ""
              )}
              <input
                ref={email}
                type="email"
                placeholder="Email Address"
                className={`border border-black p-3 w-full rounded font-medium ${
                  isSignIn ? "mt-12" : ""
                }`}
              ></input>

              <div className="relative">
                <span
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer w-8"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEye size={20} />
                  ) : (
                    <FaEyeSlash size={20} />
                  )}
                </span>
                <input
                  ref={password}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="border border-black w-full rounded font-medium p-3"
                />
              </div>
              <p className="text-orange-500 text-sm">{errorMessage}</p>
              <button
                className="bg-orange-500 text-white p-3 pointer-cursor"
                onClick={handleButtonClick}
              >
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
              <p className="text-xs">
                By clicking on Login, I accept the{" "}
                <span className="font-semibold">
                  Terms & Conditions & Privacy Policy
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
