import type { Meta, StoryObj } from "@storybook/react";

import { ExampleTooltip } from "./index";

const meta = {
  title: "Tooltip",
  component: ExampleTooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ExampleTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTooltip: Story = {
  args: {},
};
