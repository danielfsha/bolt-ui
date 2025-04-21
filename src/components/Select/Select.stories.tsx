import type { Meta, StoryObj } from "@storybook/react";

import {
  Select,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectScrollDownArrow,
  SelectScrollUpArrow,
  SelectTrigger,
  SelectValue,
} from "./index";
import { Check, ChevronsUpDown } from "lucide-react";

const meta = {
  title: "Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSelect: Story = {
  args: {},
  render: () => (
    <Select defaultValue="sans">
      <SelectTrigger>
        <SelectValue placeholder="Sans-serif" />
        <SelectIcon>
          <ChevronsUpDown strokeWidth={1.3} className="size-5" />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectPositioner sideOffset={8}>
          <SelectScrollUpArrow />
          <SelectPopup>
            <SelectItem value="sans">
              <SelectItemIndicator>
                <Check className="size-3" />
              </SelectItemIndicator>
              <SelectItemText>Sans-serif</SelectItemText>
            </SelectItem>
            <SelectItem value="serif">
              <SelectItemIndicator>
                <Check className="size-3" />
              </SelectItemIndicator>
              <SelectItemText>Serif</SelectItemText>
            </SelectItem>
            <SelectItem value="mono">
              <SelectItemIndicator>
                <Check className="size-3" />
              </SelectItemIndicator>
              <SelectItemText>Monospace</SelectItemText>
            </SelectItem>
            <SelectItem value="cursive">
              <SelectItemIndicator>
                <Check className="size-3" />
              </SelectItemIndicator>
              <SelectItemText>Cursive</SelectItemText>
            </SelectItem>
          </SelectPopup>
          <SelectScrollDownArrow />
        </SelectPositioner>
      </SelectPortal>
    </Select>
  ),
};
