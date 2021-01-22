import React from "react";
import { render, waitFor, cleanup, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";
import getPrice from "./utils/getPrice";

afterEach(cleanup);

test("getPrice() function works according to price table", () => {
  const ratings = [2.4, 4.3, 7, 9.2];
  const prices = [3500, 8250, 16350, 21250];
  ratings.map((r, i) => {
    let movie = {};
    movie.vote_average = r;
    expect(getPrice(movie)).toEqual(prices[i]);
  });
});

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

test("fetches and displays movies", async () => {
  const { getByTestId } = render(<App />);

  // Get first movie card displayed
  const resolvedMovieCard = await waitFor(() => getByTestId("movieCard0"));
  expect(resolvedMovieCard).toBeInTheDocument();
});

test("buy movie decreases balance", async () => {
  const { getByTestId, getByText } = render(<App />);

  const resolveDetailButton = await waitFor(() => getByTestId("details0"));
  act(() => {
    fireEvent.click(resolveDetailButton);
  });

  const oldBalance = getByTestId("balance").innerHTML;
  act(() => {
    fireEvent.click(getByTestId("buy"));
  });

  expect(oldBalance.innerHTML).not.toBe(getByTestId("balance").innerHTML);
});
