import * as React from "react";
import { Progress as ProgressPrimitive } from "@base-ui-components/react/progress";
import { cn } from "../../utils/lib";

const Progress = ({
  className,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) => {
  return (
    <ProgressPrimitive.Root
      {...props}
      className={cn("grid w-48 grid-cols-2 gap-y-2", className)}
    />
  );
};

const ProgressLabel = ({
  className,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Label>) => {
  return (
    <ProgressPrimitive.Label
      data-slot="progress-label"
      {...props}
      className={cn("text-sm font-medium text-gray-900", className)}
    />
  );
};

const ProgressValue = ({
  className,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Value>) => {
  return (
    <ProgressPrimitive.Value
      data-slot="progress-value"
      {...props}
      className={cn("col-start-2 text-right text-sm text-gray-900", className)}
    />
  );
};

const ProgressTrack = ({
  className,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Track>) => {
  return (
    <ProgressPrimitive.Track
      data-slot="progress-track"
      {...props}
      className={cn(
        "col-span-full h-1 overflow-hidden rounded bg-gray-200 shadow-[inset_0_0_0_1px] shadow-gray-200",
        className
      )}
    />
  );
};

const ProgressIndicator = ({
  className,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Indicator>) => {
  return (
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      {...props}
      className={cn("block bg-gray-500 transition-all duration-500", className)}
    />
  );
};

export {
  Progress,
  ProgressLabel,
  ProgressValue,
  ProgressTrack,
  ProgressIndicator,
};
