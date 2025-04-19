import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./index";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["default", "sm", "lg"],
      control: { type: "select" },
    },
    variant: {
      options: ["primary", "seconary", "outline", "destructive", "success"],
      control: { type: "select" },
    },
    children: {
      control: "text",
      description: "Button label",
      defaultValue: "Button",
    },
    onClick: { action: "clicked" }, // alternative to fn()
  },
  args: {
    size: "default",
    variant: "primary",
    children: "Button",
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    size: "default",
    variant: "primary",
    children: "Get started",
  },
};
