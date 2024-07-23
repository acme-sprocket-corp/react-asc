import { Button } from "./button";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  args: {
    text: "My Button",
    onClickHandler: fn(),
  },
};

export default meta;

export const Primary: StoryObj<typeof meta> = {};
