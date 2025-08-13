"use client";

import Image from "next/image";
import type { IntegrationsType } from "@/sections/Integrations";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";

export const IntegrationsColumn = ({
  integrations,
  className,
  reverse = false,
}: {
  className?: string;
  integrations: IntegrationsType;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ y: reverse ? "-50%" : 0 }}
      animate={{ y: reverse ? 0 : "-50%" }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
      className={twMerge("flex flex-col gap-4 pb-4", className)}
    >
      {Array.from({ length: 2 }).map((_, index) => (
        <Fragment key={index}>
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
        </Fragment>
      ))}
    </motion.div>
  );
};
