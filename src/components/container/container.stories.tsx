import { Meta, StoryObj } from "@storybook/react";
import { Container } from "./container";

const meta: Meta<typeof Container> = {
  component: Container,
  tags: ["autodocs"],
  args: {
    children: <p>Hello, I am in a Container!</p>,
  },
};

export default meta;

export const Primary: StoryObj<typeof meta> = {};
