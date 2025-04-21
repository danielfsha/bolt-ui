import * as React from "react";
import { Checkbox as CheckboxPrimitive } from "@base-ui-components/react/checkbox";

import { Check } from "lucide-react";
import { cn } from "../../utils/lib";

const CheckboxIndicator = ({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Indicator>) => {
  return (
    <CheckboxPrimitive.Indicator
      data-slot="checkbox-indicator"
      className={cn("flexflex text-gray-50 data-[unchecked]:hidden", className)}
      {...props}
    />
  );
};

const CheckboxLabel = ({
  className,
  ...props
}: React.ComponentProps<"label">) => {
  return (
    <label
      data-slot="checkbox-label"
      className={cn(
        "flex items-center gap-2 text-base text-gray-900",
        className
      )}
      {...props}
    />
  );
};

const Checkbox = ({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) => {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "flex size-5 items-center justify-center rounded-sm outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 data-[checked]:bg-gray-900 data-[unchecked]:border data-[unchecked]:border-gray-300",
        className
      )}
      {...props}
    >
      <CheckboxIndicator>
        <Check className="size-4 shrink-0 stroke-current text-gray-50 data-[unchecked]:hidden" />
      </CheckboxIndicator>
    </CheckboxPrimitive.Root>
  );
};

export { Checkbox, CheckboxIndicator, CheckboxLabel };
