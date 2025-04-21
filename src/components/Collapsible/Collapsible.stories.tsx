import type { Meta, StoryObj } from "@storybook/react";

import { CollapsiblePanel, CollapsibleTrigger, Collapsible } from "./index";
import { ChevronDown } from "lucide-react";

const meta = {
  title: "Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCollapsible: Story = {
  args: {},
  render: () => (
    <Collapsible>
      <CollapsibleTrigger>
        <ChevronDown className="group flex items-center gap-2 rounded-sm bg-gray-100 text-sm font-medium hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800 active:bg-gray-200" />
        Recovery keys
      </CollapsibleTrigger>
      <CollapsiblePanel>
        <div className="mt-1 flex cursor-text flex-col gap-2 rounded-sm bg-gray-100 py-2 pl-7">
          <div>alien-bean-pasta</div>
          <div>wild-irish-burrito</div>
          <div>horse-battery-staple</div>
        </div>
      </CollapsiblePanel>
    </Collapsible>
  ),
};
