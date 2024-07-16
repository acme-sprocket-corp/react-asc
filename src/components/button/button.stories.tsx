import { Button } from "./button";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

export const Primary: StoryObj<typeof meta> = {};
