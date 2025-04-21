import * as React from "react";
import { Menu as MenuPrimitive } from "@base-ui-components/react/menu";
import { cn } from "../../utils/lib";

const Menu = ({
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Root>) => {
  return <MenuPrimitive.Root data-slot="menu" {...props} />;
};

const MenuTrigger = ({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Trigger>) => {
  return (
    <MenuPrimitive.Trigger
      data-slot="menu-trigger"
      className={cn(
        "flex h-10 items-center justify-center gap-1.5 rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100 data-[popup-open]:bg-gray-100",
        className
      )}
      {...props}
    />
  );
};

const MenuPortal = ({
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Portal>) => {
  return <MenuPrimitive.Portal data-slot="menu-portal" {...props} />;
};

const MenuPositioner = ({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Positioner>) => {
  return (
    <MenuPrimitive.Positioner
      data-slot="menu-positioner"
      {...props}
      className={cn("outline-none", className)}
      sideOffset={8}
    />
  );
};

const MenuPopup = ({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Popup>) => {
  return (
    <MenuPrimitive.Popup
      data-slot="menu-popup"
      {...props}
      className={cn(
        "origin-[var(--transform-origin)] rounded-md bg-[canvas] py-1 text-gray-900 shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300",
        className
      )}
    />
  );
};

const MenuArrow = ({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Arrow>) => {
  return (
    <MenuPrimitive.Arrow
      data-slot="menu-arrow"
      {...props}
      className={cn(
        (className =
          "data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180"),
        className
      )}
    />
  );
};

const MenuItem = ({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Item>) => {
  return (
    <MenuPrimitive.Item
      data-slot="menu-item"
      {...props}
      className={cn(
        (className =
          "flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900"),
        className
      )}
    />
  );
};

const MenuSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Separator>) => {
  return (
    <MenuPrimitive.Separator
      data-slot="menu-separator"
      {...props}
      className={cn("mx-4 my-1.5 h-px bg-gray-200", className)}
    />
  );
};

export {
  Menu,
  MenuTrigger,
  MenuPortal,
  MenuPositioner,
  MenuPopup,
  MenuArrow,
  MenuItem,
  MenuSeparator,
};
