import { Skills } from "./Skills";
import { screen, render } from "@testing-library/react";

describe("Skills component", () => {
  const skillsData = ["HTML", "CSS", "JS", "React"];

  test("renders properly", () => {
    render(<Skills skills={skillsData} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skillsData} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skillsData.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skillsData} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("start course is not rendered", () => {
    render(<Skills skills={skillsData} />);
    const startCourseElement = screen.queryByRole("button", {
      name: "Start course",
    });
    expect(startCourseElement).not.toBeInTheDocument();
  });

  test("render start learning after delay", async () => {
    render(<Skills skills={skillsData} />);
    // promise, settimeout, callback
    const startCourseElement = await screen.findByRole(
      "button",
      {
        name: "Start course",
      },
      {
        timeout: 3000,
      }
    );
    expect(startCourseElement).toBeInTheDocument();
  });
});
