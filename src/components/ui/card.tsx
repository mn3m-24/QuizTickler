import { type HTMLAttributes, forwardRef } from "react";
import cn from "@/utils/cn";

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("bg-card text-card-foreground rounded-lg border border-card-border shadow-lg", className)} {...props} />
  )
);

export default Card;
