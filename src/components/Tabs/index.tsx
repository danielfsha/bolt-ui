import * as React from "react";
import { Tabs as TabsPrimitive } from "@base-ui-components/react/tabs";
import { cn } from "../../utils/lib";

const Tabs = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) => {
  return (
    <TabsPrimitive.Root
      className={cn("rounded-md border border-gray-200", className)}
      {...props}
    />
  );
};

const TabsList = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) => {
  return (
    <TabsPrimitive.List
      className={cn(
        "relative z-0 flex gap-1 px-1 shadow-[inset_0_-1px] shadow-gray-200",
        className
      )}
      {...props}
    />
  );
};

const TabsTab = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Tab>) => {
  return (
    <TabsPrimitive.Tab
      className={cn(
        "flex h-8 items-center justify-center border-0 px-2 text-sm font-medium text-gray-600 outline-none select-none before:inset-x-0 before:inset-y-1 before:rounded-sm before:-outline-offset-1 before:outline-blue-800 hover:text-gray-900 focus-visible:relative focus-visible:before:absolute focus-visible:before:outline focus-visible:before:outline-2 data-[selected]:text-gray-900",
        className
      )}
      {...props}
    />
  );
};

const TabsIndicator = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Indicator>) => {
  return (
    <TabsPrimitive.Indicator
      className={cn(
        "absolute top-1/2 left-0 z-[-1] h-6 w-[var(--active-tab-width)] -translate-y-1/2 translate-x-[var(--active-tab-left)] rounded-sm bg-gray-100 transition-all duration-200 ease-in-out",
        className
      )}
      {...props}
    />
  );
};

const TabsPanel = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Panel>) => {
  return (
    <TabsPrimitive.Panel
      className={cn(
        "relative flex h-32 items-center justify-center -outline-offset-1 outline-blue-800 focus-visible:rounded-md focus-visible:outline focus-visible:outline-2",
        className
      )}
      {...props}
    />
  );
};

export { Tabs, TabsList, TabsTab, TabsIndicator, TabsPanel };
