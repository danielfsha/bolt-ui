import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "@storybook/test";

import { Switch, SwitchThumb } from "./index";

const meta = {
  title: "Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSwitch: Story = {
  args: {
    defaultChecked: true,
  },
  render: () => (
    <Switch defaultChecked>
      <SwitchThumb />
    </Switch>
  ),
};
