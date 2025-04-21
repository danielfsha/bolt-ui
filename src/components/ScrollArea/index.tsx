import * as React from "react";
import { ScrollArea as ScrollAreaPrimitive } from "@base-ui-components/react/scroll-area";
import { cn } from "../../utils/lib";

const ScrollArea = ({
  className,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) => {
  return (
    <ScrollAreaPrimitive.Root
      className={cn("h-[8.5rem] w-96 max-w-[calc(100vw-8rem)]", className)}
      {...props}
    />
  );
};

const ScrollAreaViewport = ({
  className,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Viewport>) => {
  return (
    <ScrollAreaPrimitive.Viewport
      className={cn(
        "h-full overscroll-contain rounded-md outline outline-1 -outline-offset-1 outline-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800",
        className
      )}
      {...props}
    />
  );
};

const ScrollAreaScrollbar = ({
  className,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Scrollbar>) => {
  return (
    <ScrollAreaPrimitive.Scrollbar
      className={cn(
        "m-2 flex w-1 justify-center rounded bg-gray-200 opacity-0 transition-opacity delay-300 data-[hovering]:opacity-100 data-[hovering]:delay-0 data-[hovering]:duration-75 data-[scrolling]:opacity-100 data-[scrolling]:delay-0 data-[scrolling]:duration-75",
        className
      )}
      {...props}
    />
  );
};

const ScrollAreaThumb = ({
  className,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Thumb>) => {
  return (
    <ScrollAreaPrimitive.Thumb
      className={cn("w-full rounded bg-gray-500", className)}
      {...props}
    />
  );
};

export { ScrollArea, ScrollAreaViewport, ScrollAreaScrollbar, ScrollAreaThumb };
