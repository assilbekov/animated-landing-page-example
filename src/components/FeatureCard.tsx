import { twMerge } from "tailwind-merge";

export const FeatureCard = (props: {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "border border-white/10 bg-neutral-900 rounded-3xl p-6",
        props.className
      )}
    >
      <div className="aspect-video">{props.children}</div>
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-medium mt-6">{props.title}</h3>
        <p className="text-white/50 mt-2">{props.description}</p>
      </div>
    </div>
  );
};
