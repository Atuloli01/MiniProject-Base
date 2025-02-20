import { render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../../store/appStore";

test("Cart should be empty", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //query
  const cartItems = screen.getByText("Cart (0)");

  //assertion
  expect(cartItems).toBeInTheDocument();
});

test("Should contain 5 list items in header", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //query
  const items = screen.getAllByRole("listitem");
  //assertion
  expect(items.length).toBe(5);
});

it("Should contain logo image", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //query
  const image = screen.getByAltText("logo");

  //assertion
  expect(image).toBeInTheDocument();
});
