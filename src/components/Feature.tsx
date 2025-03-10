"use client";
import { useEffect, useRef } from "react";
import EcosystemIcon from "../assets/icons/ecosystem.svg";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { off } from "process";

export const Feature = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const border = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const updateMouusePosition = (e: MouseEvent) => {
      const borderRect = border.current?.getBoundingClientRect();
      if (!border.current) return;
      if (borderRect) {
        offsetX.set(e.x - borderRect.x);
        offsetY.set(e.y - borderRect.y);
      }
    };

    window.addEventListener("mousemove", updateMouusePosition);
    return () => {
      window.removeEventListener("mousemove", updateMouusePosition);
    };
  }, [offsetX, offsetY]);

  return (
    <div
      key={index}
      className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative"
    >
      <motion.div
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
        ref={border}
      ></motion.div>
      <div className="inline-flex h-14 w-14 bg-white text-black items-center justify-center rounded-lg">
        <EcosystemIcon />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
};
