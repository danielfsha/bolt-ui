import * as React from "react";
import { Separator } from "@base-ui-components/react/separator";
import { cn } from "../../utils/lib";

const Divider = ({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) => {
  return (
    <Separator
      data-slot="divider"
      orientation={props.orientation || "vertical"}
      {...props}
      className={cn("w-px bg-gray-300", className)}
    />
  );
};

export { Divider };
