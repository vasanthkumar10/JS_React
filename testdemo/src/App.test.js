import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders test vasanth", () => {
  render(<App />);
  const linkElement = screen.getByText(/hi this is vasanth/i);
  expect(linkElement).toBeInTheDocument();
});
