import { Meta, StoryObj } from "@storybook/react";
import { Section } from "./section";

const meta: Meta<typeof Section> = {
  component: Section,
  tags: ["autodocs"],
  args: {
    children: (
      <div>
        <h3>Section Heading</h3>
        <p>Section Content</p>
      </div>
    ),
  },
};

export default meta;

export const Primary: StoryObj<typeof meta> = {};
