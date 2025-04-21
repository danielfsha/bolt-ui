import type { Meta, StoryObj } from "@storybook/react";

import { ExampleToast } from "./index";

const meta = {
  title: "Toast",
  component: ExampleToast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ExampleToast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultToast: Story = {
  args: {},
};
