import * as React from "react";
import { NumberField as NumberFieldPrimitive } from "@base-ui-components/react/number-field";
import { cn } from "../../utils/lib";

const NumberField = ({
  ...props
}: React.ComponentProps<typeof NumberFieldPrimitive.Root>) => {
  return <NumberFieldPrimitive.Root {...props} />;
};

const NumberFieldScrubArea = ({
  className,
  ...props
}: React.ComponentProps<typeof NumberFieldPrimitive.ScrubArea>) => {
  return (
    <NumberFieldPrimitive.ScrubArea
      {...props}
      className={cn("cursor-ew-resize", className)}
    />
  );
};

const NumberFieldScrubAreaCursor = ({
  className,
  ...props
}: React.ComponentProps<typeof NumberFieldPrimitive.ScrubAreaCursor>) => {
  return (
    <NumberFieldPrimitive.ScrubAreaCursor
      {...props}
      className={cn("drop-shadow-[0_1px_1px_#0008] filter", className)}
    />
  );
};

const NumberFieldGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof NumberFieldPrimitive.Group>) => {
  return (
    <NumberFieldPrimitive.Group {...props} className={cn("flex", className)} />
  );
};

const NumberFieldInput = ({
  className,
  ...props
}: React.ComponentProps<typeof NumberFieldPrimitive.Input>) => {
  return (
    <NumberFieldPrimitive.Input
      {...props}
      className={cn(
        "h-10 w-24 border-t border-b border-gray-200 text-center text-base text-gray-900 tabular-nums focus:z-1 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800",
        className
      )}
    />
  );
};

const NumberFieldDecrement = ({
  className,
  ...props
}: React.ComponentProps<typeof NumberFieldPrimitive.Decrement>) => {
  return (
    <NumberFieldPrimitive.Decrement
      {...props}
      className={cn(
        "flex size-10 items-center justify-center rounded-tl-md rounded-bl-md border border-gray-200 bg-gray-50 bg-clip-padding text-gray-900 select-none hover:bg-gray-100 active:bg-gray-100",
        className
      )}
    />
  );
};

const NumberFieldIncrement = ({
  className,
  ...props
}: React.ComponentProps<typeof NumberFieldPrimitive.Increment>) => {
  return (
    <NumberFieldPrimitive.Increment
      {...props}
      className={cn(
        "flex size-10 items-center justify-center rounded-tr-md rounded-br-md border border-gray-200 bg-gray-50 bg-clip-padding text-gray-900 select-none hover:bg-gray-100 active:bg-gray-100",
        className
      )}
    />
  );
};

export {
  NumberField,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldDecrement,
  NumberFieldIncrement,
};
