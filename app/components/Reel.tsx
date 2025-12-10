"use client";

import { motion } from "framer-motion";
import { getSymbolById } from "@/app/utils/symbols";
import { useReel } from "@/app/hooks/useReel";

interface ReelProps {
  symbols: number[];
  index: number;
  isSpinning: boolean;
  onStop: () => void;
}

export function Reel({ symbols, index, isSpinning, onStop }: ReelProps) {
  const { strip, offset, symbolHeight, audioRef } = useReel(
    symbols,
    index,
    isSpinning,
    onStop
  );

  return (
    <div
      className="bg-[#F6F6F6] rounded-xl border-3 border-[#341D1A] overflow-hidden pl-3.5 pr-3 flex flex-col w-20 max-sm:w-13.5"
      style={{ height: symbolHeight }}
    >
      <audio ref={audioRef} src="/sounds/slot.mp3" preload="auto" />
      <motion.div
        style={{
          y: -(offset % (strip.length * symbolHeight)),
        }}
        transition={{ duration: 0, ease: "linear" }}
        className="flex flex-col"
      >
        {strip.map((id, i) => {
          const sym = getSymbolById(id);
          return (
            <div
              key={i}
              style={{ height: symbolHeight }}
              className="flex items-center justify-center relative"
            >
              <div
                className={`bg-[#E2E2E2] w-20 h-8.5 max-sm:h-5.5 absolute top-0 rounded-t-xl
    ${!isSpinning ? "shadow-reel-top" : ""}`}
              ></div>
              <div
                className={`bg-[#E2E2E2] w-20 h-8.5 max-sm:h-5.5 absolute bottom-0 rounded-b-xl
    ${!isSpinning ? "shadow-reel-bottom" : ""}`}
              ></div>
              {typeof sym.emoji === "string" ? (
                <span className="text-4xl w-20">{sym.emoji}</span>
              ) : (
                <img
                  src={sym.emoji.src}
                  alt={sym.name}
                  className="object-contain"
                />
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
