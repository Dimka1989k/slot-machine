"use client";

import { motion } from "framer-motion";
import { useSlotLogic } from "@/app/hooks/useSlotLogic";
import { Reel } from "@/app/components/Reel";
import { BetControls } from "@/app/components/BetControls";
import { SpinButton } from "@/app/components/SpinButton";
import { Balance } from "@/app/components/Balance";
import { WinModal } from "@/app/components/WinModal";
import { LoseModal } from "@/app/components/LoseModal";

import Lever from "./Lever/Lever";
import Image from "next/image";
import slotMachine from "@/public/slot-machine.svg";

export function SlotMachine() {
  const { reels, isSpinning, gameResult, modalVisible, notifyReelStopped } =
    useSlotLogic();

  return (
    <div className="flex justify-center relative -top-16 max-sm:top-10">
      <motion.div
        className="w-full max-w-123.5 max-sm:max-w-84.5 relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="relative">
          <Lever />
          <Image
            src={slotMachine}
            alt="slotMachine"
            className="w-full pointer-events-none select-none max-w-123.5 h-full max-h-74"
          />
          <div className="bg-transparent relative rounded-xl w-full max-w-92.5 max-sm:max-w-63">
            <div className="flex absolute gap-4.5 max-sm:gap-3 max-sm:-top-38 -top-55 max-sm:left-9 left-12.5">
              {reels.map((reel, i) => (
                <Reel
                  key={i}
                  symbols={reel}
                  index={i}
                  isSpinning={isSpinning}
                  onStop={notifyReelStopped}
                />
              ))}
            </div>
          </div>
          <BetControls />
          <SpinButton />
          <Balance />
        </div>
        <WinModal open={modalVisible && gameResult === "win"} />
        <LoseModal open={modalVisible && gameResult === "lose"} />
      </motion.div>
    </div>
  );
}
