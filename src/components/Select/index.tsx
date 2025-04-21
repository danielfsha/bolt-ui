import * as React from "react";
import { Select as SelectPrimitive } from "@base-ui-components/react/select";
import { cn } from "../../utils/lib";

const Select = ({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) => {
  return <SelectPrimitive.Root {...props} />;
};

const SelectTrigger = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) => {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        "flex h-10 min-w-36 items-center justify-between gap-3 rounded-md border border-gray-200 pr-3 pl-3.5 text-base text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100 data-[popup-open]:bg-gray-100",
        className
      )}
      {...props}
    />
  );
};

const SelectValue = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) => {
  return <SelectPrimitive.Value className={cn("", className)} {...props} />;
};

const SelectIcon = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Icon>) => {
  return <SelectPrimitive.Icon className={cn("flex", className)} {...props} />;
};

const SelectPortal = ({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Portal>) => {
  return <SelectPrimitive.Portal {...props} />;
};

const SelectPositioner = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Positioner>) => {
  return (
    <SelectPrimitive.Positioner
      className={cn("outline-none", className)}
      {...props}
    />
  );
};

const SelectScrollUpArrow = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) => {
  return (
    <SelectPrimitive.ScrollUpArrow
      className={cn(
        "top-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded-md bg-[canvas] text-center text-xs before:absolute before:top-[-100%] before:left-0 before:h-full before:w-full before:content-[''] data-[direction=down]:bottom-0 data-[direction=down]:before:bottom-[-100%]",
        className
      )}
      {...props}
    />
  );
};

const SelectPopup = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Popup>) => {
  return (
    <SelectPrimitive.Popup
      className={cn(
        "group [max-height:var(--available-height)] origin-[var(--transform-origin)] overflow-y-auto rounded-md bg-[canvas] py-1 text-gray-900 shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:scale-100 data-[ending-style]:opacity-0 data-[ending-style]:opacity-100 data-[ending-style]:transition-none data-[starting-style]:scale-90 data-[starting-style]:opacity-0 data-[side=none]:data-[starting-style]:scale-100 data-[side=none]:data-[starting-style]:opacity-100 data-[side=none]:data-[starting-style]:transition-none dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300",
        className
      )}
      {...props}
    />
  );
};

const SelectItem = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) => {
  return (
    <SelectPrimitive.Item
      className={cn(
        "grid min-w-[var(--anchor-width)] cursor-default grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pr-4 pl-2.5 text-sm leading-4 outline-none select-none group-data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] group-data-[side=none]:pr-12 group-data-[side=none]:text-base group-data-[side=none]:leading-4 data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900",
        className
      )}
      {...props}
    />
  );
};

const SelectItemIndicator = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ItemIndicator>) => {
  return (
    <SelectPrimitive.ItemIndicator
      className={cn("col-start-1", className)}
      {...props}
    />
  );
};

const SelectItemText = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ItemText>) => {
  return (
    <SelectPrimitive.ItemText
      className={cn("col-start-2", className)}
      {...props}
    />
  );
};

const SelectScrollDownArrow = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) => {
  return (
    <SelectPrimitive.ScrollDownArrow
      className={cn(
        "bottom-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded-md bg-[canvas] text-center text-xs before:absolute before:top-[-100%] before:left-0 before:h-full before:w-full before:content-[''] data-[direction=down]:bottom-0 data-[direction=down]:before:bottom-[-100%]",
        className
      )}
      {...props}
    />
  );
};

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectPositioner,
  SelectScrollUpArrow,
  SelectPopup,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectScrollDownArrow,
};
