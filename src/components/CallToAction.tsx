"use client";
import helixImage from "../assets/images/helix2.png";
import Image from "next/image";
import emojiStarImage from "../assets/images/emojistar.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="bg-black text-white py-[72px] sm:py-24 text-center"
      ref={containerRef}
    >
      <div className="container max-w-xl relative">
        {/* Helix Image - Hidden on small screens */}
        <motion.div style={{ translateY }} className="hidden sm:block">
          <Image
            src={helixImage}
            alt="Helix"
            className="absolute top-6 left-[calc(100%+36px)]"
          />
        </motion.div>

        {/* Star Emoji Image - Hidden on small screens */}
        <motion.div style={{ translateY }} className="hidden sm:block">
          <Image
            src={emojiStarImage}
            alt="Star Emoji"
            className="absolute -top-[120px] right-[calc(100%+24px)]"
          />
        </motion.div>

        <motion.h2
          className="font-bold text-5xl tracking-tighter sm:text-6xl"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Get Instant access
        </motion.h2>

        <motion.p
          className="text-white/70 mt-5 text-xl"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }} 
        >
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </motion.p>

        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium text-white placeholder:text-white/70 sm:flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};
