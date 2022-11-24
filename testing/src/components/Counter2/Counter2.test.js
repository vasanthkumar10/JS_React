import { Counter2 } from "./Counter2";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

describe("Counter2 component", () => {
  test("renders properly", () => {
    render(<Counter2 count={0} />);
    const headingElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(headingElement).toBeInTheDocument();
  });

  test("renders 0 by default", () => {
    render(<Counter2 count={0} />);
    const countElement = screen.getByRole("heading", {
      level: 2,
    });
    expect(countElement).toBeInTheDocument();
    expect(countElement).toHaveTextContent("0");
  });

  test("handlers are tested", () => {
    const handleIncrement = jest.fn();
    const handleDecrement = jest.fn();
    render(
      <Counter2
        count={0}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    );

    const incrementBtn = screen.getByRole("button", {
      name: "increment",
    });

    const decrementBtn = screen.getByRole("button", {
      name: "decrement",
    });

    user.click(incrementBtn);
    expect(handleIncrement).toHaveBeenCalledTimes(1);

    user.dblClick(decrementBtn);
    expect(handleDecrement).toHaveBeenCalledTimes(2);
  });

  test("render header color in red", () => {
    render(<Counter2 count={0} />);
    const headerClass = Counter2().type.styledComponentId;
    const headingElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(headingElement).toHaveClass("heading");
  });
});
