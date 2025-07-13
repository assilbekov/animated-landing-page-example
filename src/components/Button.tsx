import { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const buttonVariants = cva("border h-12 rounded-full px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-lime-400 text-neutral-950 border-lime-400",
      secondary: "border-white",
    },
  },
});

export const Button = (
  props: {
    variant: "primary" | "secondary";
  } & HTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button
      {...props}
      className={buttonVariants({
        variant: props.variant,
        className: props.className,
      })}
    />
  );
};
