import type { Meta, StoryObj } from "@storybook/react";

import {
  ScrollArea,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "./index";

const meta = {
  title: "ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultScrollArea: Story = {
  args: {},
  render: () => (
    <ScrollArea>
      <ScrollAreaViewport>
        <div className="flex flex-col gap-4 py-3 pr-6 pl-4 text-sm leading-[1.375rem] text-gray-900">
          <p>
            Vernacular architecture is building done outside any academic
            tradition, and without professional guidance. It is not a particular
            architectural movement or style, but rather a broad category,
            encompassing a wide range and variety of building types, with
            differing methods of construction, from around the world, both
            historical and extant and classical and modern. Vernacular
            architecture constitutes 95% of the world's built environment, as
            estimated in 1995 by Amos Rapoport, as measured against the small
            percentage of new buildings every year designed by architects and
            built by engineers.
          </p>
          <p>
            This type of architecture usually serves immediate, local needs, is
            constrained by the materials available in its particular region and
            reflects local traditions and cultural practices. The study of
            vernacular architecture does not examine formally schooled
            architects, but instead that of the design skills and tradition of
            local builders, who were rarely given any attribution for the work.
            More recently, vernacular architecture has been examined by
            designers and the building industry in an effort to be more energy
            conscious with contemporary design and construction—part of a
            broader interest in sustainable design.
          </p>
        </div>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar className="m-2 flex w-1 justify-center rounded bg-gray-200 opacity-0 transition-opacity delay-300 data-[hovering]:opacity-100 data-[hovering]:delay-0 data-[hovering]:duration-75 data-[scrolling]:opacity-100 data-[scrolling]:delay-0 data-[scrolling]:duration-75">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    </ScrollArea>
  ),
};
