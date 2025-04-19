"use client";

import { forwardRef, HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils/lib";

const buttonVariants = cva(
  "flex items-center justify-center relative px-[18px] py-2.5 pb-4 rounded-[9px] text-base tracking-tight font-regular",
  {
    variants: {
      variant: {
        primary:
          "border-[0.2px] border-gray-300 bg-white text-[#474747] inset-shadow-[0_-4px_2px_0_rgba(226,226,226,1)]",
        secondary:
          "text-white bg-[#848484] shadow shadow-inner border-[#474747] border-opacity-60 inset-shadow-[0_-4px_2px_0_rgba(0,0,0,1)]",
        destructive:
          "bg-red-300/20 text-red-500 border-1 border-red-500 inset-shadow-[0_-4px_2px_0_rgba(255,51,51,0.6)]",
        success:
          "bg-green-300/20 text-green-500 border-1 border-green-500 inset-shadow-[0_-4px_2px_0_rgba(51,255,58,0.6)]",
        outline: "border-1 border-[#474747] text-[#474747]",
      },
      size: {
        default: "text-sm px-4 py-2",
        sm: "text-sm px-3 py-1.5",
        lg: "px-6 py-3 rounded-[14px]",
        icon: "w-9 h-9 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
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

export { Button, ButtonProps, buttonVariants };
