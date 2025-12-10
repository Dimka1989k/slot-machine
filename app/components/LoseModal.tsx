"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import redButton from "@/public/button-red.svg";
import { useLoseModal } from "@/app/hooks/useLoseModal";

interface Props {
  open: boolean;
}

export function LoseModal({ open }: Props) {
  const { audioRef, intPart, decimalPart } = useLoseModal(open);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-lose-color flex items-center justify-center z-9999"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <audio ref={audioRef} src="/sounds/lose.mp3" preload="auto" />
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
          >
            <div className="space-y-2 bg-losemodal w-[317px] h-[139px]">
              <h2
                className="text-pocket font-outline-2 pt-3 pl-10 shadow-lose"
                style={{ transform: "rotate(11deg)" }}
              >
                you <span className="text-red shadow-lose">lose</span>
              </h2>
              <div className="mt-[30px] flex justify-center items-center gap-2">
                <Image src={redButton} alt="redButton" width={25} height={25} />
                <p className="text-bungee-balance text-red font-outline-3">
                  {intPart}
                  <span className="text-white-none font-outline-3">
                    .{decimalPart}
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
