import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Avatar = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={twMerge(
        "size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-900",
        className
      )}
    >
      {children}
    </div>
  );
};
