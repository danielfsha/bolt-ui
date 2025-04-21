import * as React from "react";
import { Popover as PopoverPrimitive } from "@base-ui-components/react/popover";
import { cn } from "../../utils/lib";

const Popover = ({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) => {
  return <PopoverPrimitive.Root {...props} />;
};

const PopoverTrigger = ({
  className,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) => {
  return (
    <PopoverPrimitive.Trigger
      data-slot="popover-trigger"
      {...props}
      className={cn(
        "flex size-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100 data-[popup-open]:bg-gray-100",
        className
      )}
    />
  );
};

const PopoverPortal = ({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Portal>) => {
  return <PopoverPrimitive.Portal {...props} />;
};

const PopoverPositioner = ({
  className,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Positioner>) => {
  return (
    <PopoverPrimitive.Positioner
      data-slot="popover-positioner"
      {...props}
      className={cn("outline-none", className)}
      sideOffset={8}
    />
  );
};

const PopoverPopup = ({
  className,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Popup>) => {
  return (
    <PopoverPrimitive.Popup
      data-slot="popover-popup"
      {...props}
      className={cn(
        "origin-[var(--transform-origin)] rounded-lg bg-[canvas] px-6 py-4 text-gray-900 shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300",
        className
      )}
    />
  );
};

const PopoverArrow = ({
  className,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Arrow>) => {
  return (
    <PopoverPrimitive.Arrow
      data-slot="popover-arrow"
      {...props}
      className={cn(
        (className =
          "data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180"),
        className
      )}
    />
  );
};

const PopoverTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Title>) => {
  return (
    <PopoverPrimitive.Title
      data-slot="popover-title"
      {...props}
      className={cn("text-base font-medium", className)}
    />
  );
};

const PopoverDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Description>) => {
  return (
    <PopoverPrimitive.Description
      data-slot="popover-description"
      {...props}
      className={cn("text-base text-gray-600", className)}
    />
  );
};

export {
  Popover,
  PopoverTrigger,
  PopoverPortal,
  PopoverPositioner,
  PopoverPopup,
  PopoverArrow,
  PopoverTitle,
  PopoverDescription,
};
