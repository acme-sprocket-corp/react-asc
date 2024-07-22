import { Button } from "./button";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};

export default meta;

export const Primary: StoryObj<typeof meta> = {};
