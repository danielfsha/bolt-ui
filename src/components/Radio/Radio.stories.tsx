import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroup, RadioIndicator, Radio } from "./index";

const meta = {
  title: "Radio",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultRadio: Story = {
  args: {},
  render: () => (
    <RadioGroup aria-labelledby="apples-caption" defaultValue="fuji-apple">
      <div className="font-medium" id="apples-caption">
        Best apple
      </div>

      <label className="flex items-center gap-2">
        <Radio value="fuji-apple">
          <RadioIndicator />
        </Radio>
        Fuji
      </label>

      <label className="flex items-center gap-2">
        <Radio value="gala-apple">
          <RadioIndicator />
        </Radio>
        Gala
      </label>

      <label className="flex items-center gap-2">
        <Radio value="granny-smith-apple">
          <RadioIndicator />
        </Radio>
        Granny Smith
      </label>
    </RadioGroup>
  ),
};
