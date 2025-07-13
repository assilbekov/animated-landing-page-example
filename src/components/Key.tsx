import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Key = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={twMerge(
        "size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl text-neutral-950 font-medium",
        className
      )}
    >
      {children}
    </div>
  );
};
