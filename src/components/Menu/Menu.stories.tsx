import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import {
  Menu,
  MenuArrow,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuSeparator,
  MenuTrigger,
} from "./index";
import { ChevronDown } from "lucide-react";

const meta = {
  title: "Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "",
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultMenu: Story = {
  args: {},
  render: () => (
    <Menu>
      <MenuTrigger>
        Song <ChevronDown className="-mr-1" />
        React.ReactNode
      </MenuTrigger>
      <MenuPortal>
        <MenuPositioner>
          <MenuPopup>
            <MenuItem>Add to Library</MenuItem>
            <MenuItem>Add to Playlist</MenuItem>
            <MenuSeparator />
            <MenuItem>Play Next</MenuItem>
            <MenuItem>Play Last</MenuItem>
            <MenuSeparator />
            <MenuItem>Favorite</MenuItem>
            <MenuItem>Share</MenuItem>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </Menu>
  ),
};
