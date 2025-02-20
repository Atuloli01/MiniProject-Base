import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Search from "./src/pages/Search";
import ResMenu from "./src/pages/ResMenu";
import Cart from "./src/pages/Cart";
import Footer from "./src/components/Footer";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Collections from "./src/components/Collections";
import Help from "./src/pages/Help";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { lazy, Suspense } from "react";

const Offers = lazy(() => import("./src/pages/Offers"));

const AppComponent = () => {
  const location = useLocation();
  const isCartPage = location.pathname === "/cart";
  return (
    <Provider store={appStore}>
      <ToastContainer />
      <div className="fixed top-0 w-full z-30">
        <Header />
      </div>
      <div className="w-full h-full mt-24">
        <Outlet />
      </div>
      {!isCartPage && <Footer />}
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/restaurant/:resId",
        element: <ResMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/collections/:id",
        element: <Collections />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/offers",
        element: (
          <Suspense>
            <Offers />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
