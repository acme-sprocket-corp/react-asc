import { render, screen } from "@testing-library/react";
import { Container } from "./container";

describe("container", () => {
  it("renders", () => {
    render(
      <Container>
        <p>Hello!</p>
      </Container>,
    );
  });

  it("has correct class", () => {
    render(<Container>Container</Container>);

    expect(screen.getByText(/container/i)).toHaveClass("container");
  });
});
