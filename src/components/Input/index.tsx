import { HTMLAttributes } from "react";

import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils/lib";

const inputVariants = cva(
  "w-full max-w-64 rounded-md border border-gray-200 pl-3.5 text-base text-gray-900 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800",
  {
    variants: {
      size: {
        default: "text-sm h-10  px-4 py-2",
        sm: "text-sm px-3 py-1.5",
        lg: "text-lg px-6 py-2 rounded-[10px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

type InputProps = HTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>;

const Input = ({ className, size, ...props }: InputProps) => {
  return (
    <input
      data-slot="input"
      className={cn(inputVariants({ size }), className)}
      {...props}
    />
  );
};

Input.displayName = "Input";

export { Input };
