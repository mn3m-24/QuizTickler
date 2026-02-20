import type { HTMLAttributes } from "react";
import cn from "@/utils/cn";

const Skeleton = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gray-200 dark:bg-gray-800",
        className
      )}
      {...props}
    ></div>
  );
};

export default Skeleton;
