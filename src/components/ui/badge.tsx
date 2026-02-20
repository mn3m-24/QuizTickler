import cn from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        easy: "bg-green-100 text-green-700 hover:bg-green-100/80",
        medium: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100/80",
        hard: "bg-red-100 text-red-700 hover:bg-red-100/80",
        category: "text-foreground border border-slate-200",
      },
    },
  }
);

interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> { }

const Badge = ({ variant, className, ...props }: BadgeProps) => {
  return <span
    className={cn(badgeVariants({ variant }), className)}
    {...props}
  />;
};

export default Badge;
