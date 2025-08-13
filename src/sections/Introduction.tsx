"use client";

import { Tag } from "@/components/Tag";
import { useScroll } from "framer-motion";
import { useRef } from "react";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
  const scrollTarget = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-20">
          <div className="flex justify-center">
            <Tag>Introducing layers</Tag>
          </div>
          <div className="text-center text-4xl md:text-6xl lg:text-7xl font-medium mt-10">
            <span>
              Your creative process should be fast, flexible, and fun.
            </span>{" "}
            <span className="text-white/50">{text}</span>{" "}
            <span className="text-lime-400 block">
              That&apos;s why we built layers.
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget} />
      </div>
    </section>
  );
}
