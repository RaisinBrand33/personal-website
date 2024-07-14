"use client"

import React from "react";
import { motion } from "framer-motion";
import NameChip from "./name-chip";

export default function PulseBeams() {
  return (
    <div className="flex h-[434px] relative items-center justify-center antialiased overflow-hidden">
      <div className="relative">
        <div className="z-40 relative">
            <NameChip title="Brandon Farber" />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <SVGs />
      </div>
    </div>
  );
};

export const SVGs = () => {
  const width = 992;
  const height = 434;
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex flex-shrink-0"
    >
        {/*
            Format for path curves:
            - Going left and down: C x y x- y x- y+; x- = cx
            - Going left and up: ?
         */}
      <path
        d="M300 129.5 H16.5 C 16.5 129.5 6.5 128 6.5 140 V250"
        className="stroke-zinc-800"
      />
      <path
        d="M690 129.5 H841 C846.523 129.5 851 124.5 851 120 V40"
        className="stroke-zinc-800"
      />
      <path
        d="M 412 274 V333 C412 338.523 412 343 408 343 H 337.9 C 337.9 343 333.9 343 333.9 347 V426.5"
        className="stroke-zinc-800"
      />
      <path
        d="M524 274 V333.226 C524 338.749 524 343.226 528 343.226 H876 C 880 343.226 880 347.703 880 353.226V427"
        className="stroke-zinc-800"
      />
      <path
        d="M412 168 V17 C412 11.4772 416 7 420 7 H450"
        className="stroke-zinc-800"
      />

      {/* Gradient Beams */}

      <path
        d="M300 129.5 H16.5 C 16.5 129.5 6.5 128 6.5 140 V250"
        stroke="url(#grad1)"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M690 129.5 H841 C846.523 129.5 851 124.5 851 120 V40"
        stroke="url(#grad2)"
      />
      <path
        d="M 412 274 V333 C412 338.523 412 343 408 343 H 337.9 C 337.9 343 333.9 343 333.9 347 V426.5"
        stroke="url(#grad3)"
      />
      <path
        d="M524 274 V333.226 C524 338.749 524 343.226 528 343.226 H876 C 880 343.226 880 347.703 880 353.226V427"
        stroke="url(#grad4)"
      />
      <path
        d="M412 168 V17 C412 11.4772 416 7 420 7 H450"
        stroke="url(#grad5)"
      />

      <defs>
        <motion.linearGradient
          animate={{
            x1: [0, width * 1.2],
            x2: [0, width],
            y1: [height, height / 2],
            y2: [height * 1.2, height],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2,
          }}
          gradientUnits="userSpaceOnUse"
          id="grad1"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          animate={{
            x1: [0, width * 1.2],
            x2: [0, width],
            y1: [height, height / 2],
            y2: [height * 1.2, height],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 3,
          }}
          id="grad2"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          animate={{
            x1: [0, width * 1.2],
            x2: [0, width],
            y1: [height, height / 2],
            y2: [height * 1.2, height],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2,
          }}
          gradientUnits="userSpaceOnUse"
          id="grad3"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          animate={{
            x1: [0, width * 1.2],
            x2: [0, width],
            y1: [height, height / 2],
            y2: [height * 1.2, height],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2,
          }}
          gradientUnits="userSpaceOnUse"
          id="grad4"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          animate={{
            x1: [0, width * 1.2],
            x2: [0, width],
            y1: [height, height / 2],
            y2: [height * 1.2, height],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2,
          }}
          gradientUnits="userSpaceOnUse"
          id="grad5"
        >
          <GradientColors />
        </motion.linearGradient>
      </defs>
      <circle
        cx="851"
        cy="34"
        r="6.5"
        className="stroke-zinc-600 fill-zinc-700"
      />
      <circle
        cx="880"
        cy="427"
        r="6.5"
        className="stroke-zinc-600 fill-zinc-700"
      />
      <circle
        cx="333.9"
        cy="427"
        r="6.5"
        className="stroke-zinc-600 fill-zinc-700"
      />
      <circle
        cx="6.5"
        cy="250"
        r="6"
        className="stroke-zinc-600 fill-zinc-700"
      />
      <circle
        cx="450"
        cy="6.5"
        r="6"
        className="stroke-zinc-600 fill-zinc-700"
      />
    </svg>
  );
};
const GradientColors = () => {
  return (
    <>
      <stop stopColor="#18CCFC" stopOpacity="0"></stop>
      <stop stopColor="#18CCFC"></stop>
      <stop offset="0.325" stopColor="#6344F5"></stop>
      <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
    </>
  );
};