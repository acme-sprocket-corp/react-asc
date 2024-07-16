import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("button", () => {
  it("renders", () => {
    render(<Button />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
