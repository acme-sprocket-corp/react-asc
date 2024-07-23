import { render, screen } from "@testing-library/react";
import { Button } from "./button";
import { userEvent } from "@testing-library/user-event";

describe("button", () => {
  it("renders", () => {
    render(<Button onClickHandler={vi.fn()} text="button" />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("onClick handler works", async () => {
    expect.assertions(1);

    const user = userEvent.setup();

    const clickHandler = vi.fn();

    render(<Button onClickHandler={clickHandler} text="button" />);

    await user.click(screen.getByRole("button"));

    expect(clickHandler).toHaveBeenCalledOnce();
  });

  it("show correct text content", () => {
    const text = "myContent";

    render(<Button onClickHandler={vi.fn()} text={text} />);

    expect(screen.getByRole("button", { name: text })).toBeInTheDocument();
  });
});
