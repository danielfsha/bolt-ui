import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "@storybook/test";

import { Input } from "./index";

const meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["default", "sm", "lg"],
      control: { type: "select" },
    },
    onChange: { action: "changed" }, // alternative to fn(),
  },

  args: {
    size: "default",
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    size: "default",
  },
};
