import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import cn from "@/utils/cn";

const buttonVariants = cva(
  "rounded-md font-medium cursor-pointer active:translate-y-0 active:scale-95 hover:shadow-md hover:-translate-y-0.5 transition-all focus-visible:outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", // base style
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground border-primary hover:brightness-110",
        secondary:
          "bg-secondary text-secondary-foreground border-secondary hover:brightness-90",
      },
      size: {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-8 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    ></button>
  );
};

export default Button;
