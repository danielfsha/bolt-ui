import * as React from "react";
import { Slider as SliderPrimitive } from "@base-ui-components/react/slider";
import { cn } from "../../utils/lib";

const Slider = ({
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) => {
  return <SliderPrimitive.Root {...props} />;
};

const SliderControl = ({
  className,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Control>) => {
  return (
    <SliderPrimitive.Control
      className={cn(
        "flex w-56 touch-none items-center py-3 select-none",
        className
      )}
      {...props}
    />
  );
};

const SliderTrack = ({
  className,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Track>) => {
  return (
    <SliderPrimitive.Track
      className={cn(
        "h-1 w-full rounded-full bg-gray-200 shadow-[inset_0_0_0_1px] shadow-gray-200 select-none",
        className
      )}
      {...props}
    />
  );
};

const SliderIndicator = ({
  className,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Indicator>) => {
  return (
    <SliderPrimitive.Indicator
      className={cn("rounded bg-gray-700 select-none", className)}
      {...props}
    />
  );
};

const SliderThumb = ({
  className,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Thumb>) => {
  return (
    <SliderPrimitive.Thumb
      className={cn(
        "size-3 rounded-full bg-white outline outline-1 outline-gray-300 select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800",
        className
      )}
      {...props}
    />
  );
};

export { Slider, SliderControl, SliderTrack, SliderIndicator, SliderThumb };
