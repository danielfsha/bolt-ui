import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "./index";

const meta = {
  title: "Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultDivider: Story = {
  args: {},
  render: () => (
    <div className="flex gap-4 text-nowrap">
      <a
        href="#"
        className="text-sm text-gray-900 decoration-gray-400 decoration-1 underline-offset-2 outline-none hover:underline focus-visible:rounded-sm focus-visible:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800"
      >
        Home
      </a>

      <a
        href="#"
        className="text-sm text-gray-900 decoration-gray-400 decoration-1 underline-offset-2 outline-none hover:underline focus-visible:rounded-sm focus-visible:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800"
      >
        Support
      </a>

      <Divider orientation="vertical" className="w-px bg-gray-300" />

      <a
        href="#"
        className="text-sm text-gray-900 decoration-gray-400 decoration-1 underline-offset-2 outline-none hover:underline focus-visible:rounded-sm focus-visible:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800"
      >
        Log in
      </a>
      <a
        href="#"
        className="text-sm text-gray-900 decoration-gray-400 decoration-1 underline-offset-2 outline-none hover:underline focus-visible:rounded-sm focus-visible:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800"
      >
        Sign up
      </a>
    </div>
  ),
};
