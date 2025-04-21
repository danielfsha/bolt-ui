import * as React from "react";
import { Collapsible as CollapsiblePrimitive } from "@base-ui-components/react/collapsible";
import { ChevronDown } from "lucide-react";
import { cn } from "../../utils/lib";

const Collapsible = ({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) => {
  return (
    <CollapsiblePrimitive.Root
      data-slot="collapsible"
      className={cn(
        "flex min-h-36 w-56 flex-col justify-center text-gray-900",
        className
      )}
      {...props}
    />
  );
};

const CollapsibleTrigger = ({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Trigger>) => {
  return (
    <CollapsiblePrimitive.Trigger
      data-slot="collapsible-trigger"
      className={cn(
        "group flex items-center gap-2 rounded-sm bg-gray-100 px-2 py-1 text-sm font-medium hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800 active:bg-gray-200",
        className
      )}
      {...props}
    />
  );
};

const CollapsiblePanel = ({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Panel>) => {
  return (
    <CollapsiblePrimitive.Panel
      data-slot="collapsible-panel"
      className={cn(
        "flex h-[var(--collapsible-panel-height)] flex-col justify-end overflow-hidden text-sm transition-all ease-out data-[ending-style]:h-0 data-[starting-style]:h-0",
        className
      )}
      {...props}
    />
  );
};

export { Collapsible, CollapsibleTrigger, CollapsiblePanel };
