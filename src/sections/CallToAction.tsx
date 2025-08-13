"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
  const animation = useRef<AnimationPlaybackControls>();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }
    );
  }, []);

  return (
    <section className="py-24">
      <div
        className="overflow-x-clip p-4 flex"
        onMouseEnter={() => animation.current?.pause()}
        onMouseLeave={() => animation.current?.play()}
      >
        <motion.div
          ref={scope}
          className="flex flex-none gap-16 text-7xl md:text-8xl font-medium pr-16"
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex items-center gap-16">
              <span className="text-lime-400 text-7xl">&#10038;</span>
              <span>Try it for free</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
