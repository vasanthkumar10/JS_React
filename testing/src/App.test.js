import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("Learn React");
  expect(linkElement).toBeInTheDocument();
});

test("renders para correctly", () => {
  render(<App />);
  const paraElement = screen.getByText("this is test class");
  expect(paraElement).toBeInTheDocument();
});
