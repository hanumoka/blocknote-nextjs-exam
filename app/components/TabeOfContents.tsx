"use client";
import React from "react";

import { useScroll, useTransform, motion } from "framer-motion";

const TabeOfContents = () => {
  const { scrollYProgress } = useScroll();
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="h-full px-4">
      <div className="sticky top-20 h-[80vh] py-32 flex gap-4">
        <div className="h-full w-0.5 bg-neutral-300 rounded-full overflow-hidden">
          <motion.div
            className="bg-neutral-800 w-full origin-top"
            style={{ height: progressHeight }}
          />
        </div>
        <div className="hidden lg:flex flex-col gap-6 text-sm xl:text-base">
          <span className="cursor-pointer transition-colors duration-200">
            Section
          </span>
        </div>
      </div>
    </div>
  );
};

export default TabeOfContents;
