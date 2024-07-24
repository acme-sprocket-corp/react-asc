import { render, screen } from "@testing-library/react";
import { Section } from "./section";

describe("section", () => {
  it("renders", () => {
    render(<Section>I am in a section!</Section>);
  });

  it("has correct class", () => {
    render(<Section>I am in a section!</Section>);

    expect(screen.getByText(/section/i)).toHaveClass("px-1", "py-2");
  });
});
