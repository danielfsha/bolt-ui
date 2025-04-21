import type { Meta, StoryObj } from "@storybook/react";

import { ExampleToggle } from "./index";

const meta = {
  title: "Toggle",
  component: ExampleToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ExampleToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultToggle: Story = {
  args: {},
};
