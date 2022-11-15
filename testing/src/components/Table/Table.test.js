import { Table } from "./Table";
import { screen, render } from "@testing-library/react";

describe("Table Element", () => {
  test("renders properly", () => {
    render(<Table />);
    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const addressElement = screen.getByRole("textbox", {
      name: "Address",
    });
    expect(addressElement).toBeInTheDocument();

    const countriesElement = screen.getByRole("combobox");
    expect(countriesElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitBtnElement = screen.getByRole("button");
    expect(submitBtnElement).toBeInTheDocument();

    const pageHeadingElement = screen.getByRole("heading", {
      level: 1,
      name: "Page title",
    });
    expect(pageHeadingElement).toBeInTheDocument();

    const extraTitleElement = screen.getByRole("heading", {
      level: 1,
      name: "Page extra title",
    });
    expect(extraTitleElement).toBeInTheDocument();

    const subtitleElement = screen.getByRole("heading", {
      level: 2,
    });
    expect(subtitleElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name");
    expect(nameElement2).toBeInTheDocument();

    const addressElement2 = screen.getByLabelText("Address");
    expect(addressElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("enter the name");
    expect(nameElement3).toBeInTheDocument();

    const pageHeadingElement2 = screen.getByText("Page title");
    expect(pageHeadingElement2).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue("vasanth");
    expect(nameElement4).toBeInTheDocument();

    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();

    const imageElement2 = screen.getByAltText("bottle");
    expect(imageElement2).toBeInTheDocument();

    const titleElement = screen.getByTitle("World Health Organisation");
    expect(titleElement).toBeInTheDocument();

    const paraElement = screen.getByTestId("para");
    expect(paraElement).toBeInTheDocument();
  });
});
