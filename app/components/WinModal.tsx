"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import redButton from "@/public/button-red.svg";
import smile from "@/public/smile.svg";

import { useWinModal } from "@/app/hooks/useWinModal";

interface Props {
  open: boolean;
}

export function WinModal({ open }: Props) {
  const { audioRef, intPart, decimalPart } = useWinModal(open);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed flex bg-light-blue items-center justify-center z-9999 w-full h-full inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <audio ref={audioRef} src="/sounds/win.mp3" preload="auto" />
          <motion.img
            src="/bg-win.svg"
            alt="sun animation"
            className="absolute w-[1600px] h-[1600px] max-w-none max-h-none object-cover"
            style={{ transformOrigin: "center center" }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
          />
          <motion.div
            className="relative bg-winmodal w-[317px] h-[170px]"
            initial={{ scale: 0.7, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.7, y: 40 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <div className="relative text-center space-y-2">
              <h2
                className="text-pocket font-outline-2 pt-5 pr-12 shadow-lose"
                style={{ transform: "rotate(-11deg)" }}
              >
                you win!!!
              </h2>
              <div className="mt-[30px] flex justify-center items-center gap-2">
                <Image
                  src={smile}
                  alt="smile"
                  width={48}
                  height={41}
                  className="absolute top-4 right-11"
                />
                <Image src={redButton} alt="redButton" width={25} height={25} />
                <p className="text-bungee-balance text-black font-outline-3">
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
