import type { Meta, StoryObj } from "@storybook/react";

import {
  Popover,
  PopoverArrow,
  PopoverDescription,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverTitle,
  PopoverTrigger,
} from "./index";
import { Bell, ChevronRight } from "lucide-react";

const meta = {
  title: "Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultPopover: Story = {
  args: {},
  render: () => (
    <Popover>
      <PopoverTrigger>
        <Bell size={16} aria-label="Notifications" />
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverPositioner sideOffset={8}>
          <PopoverPopup>
            <PopoverArrow>{/* <ChevronRight /> */}</PopoverArrow>
            <PopoverTitle>Notifications</PopoverTitle>
            <PopoverDescription>
              You are all caught up. Good job!
            </PopoverDescription>
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </Popover>
  ),
};
