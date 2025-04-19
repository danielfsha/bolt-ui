"use client";

import { forwardRef, HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils/lib";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ",
  {
    variants: {
      variant: {
        default: "bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-500",
        destructive: "bg-red-500 hover:bg-red-600 focus:ring-red-500",
        outline:
          "border border-gray-300 hover:bg-gray-50 hover:text-gray-900 focus:ring-gray-500",
      },
      size: {
        default: ["text-sm", "px-4 py-2"],
        sm: ["text-sm", "px-4 py-2"],
        lg: ["text-lg", "px-8 py-3"],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
          }),
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
