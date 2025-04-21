import * as React from "react";
import { Radio as RadioPrimitive } from "@base-ui-components/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui-components/react/radio-group";
import { cn } from "../../utils/lib";

const RadioGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive>) => {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      {...props}
      className={cn("flex flex-col items-start gap-1 text-gray-900", className)}
    />
  );
};

const Radio = ({
  className,
  ...props
}: React.ComponentProps<typeof RadioPrimitive.Root>) => {
  return (
    <RadioPrimitive.Root
      data-slot="radio"
      {...props}
      className={cn(
        "flex size-5 items-center justify-center rounded-full outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 data-[checked]:bg-gray-900 data-[unchecked]:border data-[unchecked]:border-gray-300",
        className
      )}
    />
  );
};

const RadioIndicator = ({
  className,
  ...props
}: React.ComponentProps<typeof RadioPrimitive.Indicator>) => {
  return (
    <RadioPrimitive.Indicator
      data-slot="radio-indicator"
      {...props}
      className={cn(
        "flex before:size-2 before:rounded-full before:bg-gray-50 data-[unchecked]:hidden",
        className
      )}
    />
  );
};

export { RadioGroup, Radio, RadioIndicator };
