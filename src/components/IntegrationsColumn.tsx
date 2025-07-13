import Image from "next/image";
import type { IntegrationsType } from "@/sections/Integrations";
import { twMerge } from "tailwind-merge";

export const IntegrationsColumn = ({
  integrations,
  className,
}: {
  className?: string;
  integrations: IntegrationsType;
}) => {
  return (
    <div className={twMerge("flex flex-col gap-4 pb-4", className)}>
      {integrations.map((integration) => (
        <div
          key={integration.name}
          className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
        >
          <div className="flex justify-center">
            <Image
              src={integration.icon}
              alt={integration.name}
              className="size-24"
            />
          </div>
          <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
          <p className="text-white/50 text-center mt-2">
            {integration.description}
          </p>
        </div>
      ))}
    </div>
  );
};
