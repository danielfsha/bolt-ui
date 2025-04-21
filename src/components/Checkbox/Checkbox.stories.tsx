import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox, CheckboxIndicator, CheckboxLabel } from "./index";

const meta = {
  title: "Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCheckbox: Story = {
  args: {},
  render: () => (
    <CheckboxLabel>
      <Checkbox defaultChecked />
      Enable notifications
    </CheckboxLabel>
  ),
};
