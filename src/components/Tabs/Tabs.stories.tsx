import type { Meta, StoryObj } from "@storybook/react";

import { Tabs, TabsIndicator, TabsList, TabsPanel, TabsTab } from "./index";

const meta = {
  title: "Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTabs: Story = {
  args: {},
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTab value="overview">Overview</TabsTab>
        <TabsTab value="projects">Projects</TabsTab>
        <TabsTab value="account">Account</TabsTab>
        <TabsIndicator />
      </TabsList>
      <TabsPanel value="overview">overview Tab</TabsPanel>
      <TabsPanel value="projects">Projects Tab</TabsPanel>
      <TabsPanel value="account">Account Tab</TabsPanel>
    </Tabs>
  ),
};
