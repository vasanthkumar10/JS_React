import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet Component", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const nameElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(nameElement).toBeInTheDocument();
  });

  test("renders guest", () => {
    render(<Greet />);
    const nameElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(nameElement).toHaveTextContent("Guest");
  });

  test("renders name correctly", () => {
    render(<Greet name={"Vasanth"} />);
    const nameElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(nameElement).toHaveTextContent("Hello Vasanth");
  });
});
