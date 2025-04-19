import { HTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";
export declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
}
declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export default Button;
