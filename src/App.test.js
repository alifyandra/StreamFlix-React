import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import getPrice from "./utils/getPrice";

test("essential <App /> components render", () => {
  const { getByText } = render(<App />);
  const navBrand = getByText(/StreamFlix/i);
  const balance = getByText(/Balance:/i);
  const header = getByText(/Movies Now Playing in Indonesia/i);
  const footer = getByText(/Ahmad Izzudin Alifyandra/i);
  expect(navBrand).toBeInTheDocument();
  expect(balance).toBeInTheDocument();
  expect(header).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});

test("getPrice function works", () => {
  const ratings = [2.4, 4.3, 7, 9.2];
  const prices = [3500, 8250, 16350, 21250];
  ratings.map((r, i) => {
    let movie = {};
    movie.vote_average = r;
    expect(getPrice(movie)).toEqual(prices[i]);
  });
});

test("initial balance", () => {
  // render(<App />);
  // expect(App.balance).toEqual(100000);
  const setBalance = jest.fn();
  const wrapper = mount(<App onClick={setBalance} />);
  const handleClick = jest.spyOn(React, "useState");
  handleClick.mockImplementation((balance) => [balance, setBalance]);

  wrapper.find();
});
