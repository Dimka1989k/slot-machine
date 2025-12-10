"use client";

import { useSlotLogic } from "@/app/hooks/useSlotLogic";
import Image from "next/image";
import redButton from "@/public/button-red.svg";

export function Balance() {
  const { balance, jackpot, jackpotWon, isSpinning } = useSlotLogic(); 
  const showJackpotBlock = jackpotWon && !isSpinning;
  const [balInt, balDec] = balance.toFixed(2).split("."); 
  const [jackInt, jackDec] = jackpot.toFixed(2).split(".");

  return (
    <div className="flex justify-center">
      <div className="flex flex-col absolute -bottom-32 max-[376px]:-bottom-32  min-[376px]:max-[480px]:-bottom-45   min-[480px]:max-[640px]:-bottom-65  min-[640px]:max-[1023px]:-bottom-23 z-9999 bg-balance w-102.5 h-[123px] min-[375px]:max-[1023px]:w-62.5 min-[375px]:max-[1023px]:h-19 items-center justify-center">
        <p className="absolute -top-8.5 max-md:-top-6  max-lg:-top-12 font-poetsen text-[55px]  max-md:text-[37px] text-gold font-outline-2 shadow-balance">
          {showJackpotBlock ? "JACKPOT" : "Balance"}
        </p>      
        <div className="flex justify-center items-center gap-3">
          <Image src={redButton} alt="redButton" />
          {showJackpotBlock ? (
            <p className="text-bungee-balance text-white shadow-balance">
              {jackInt}
              <span className="text-dark shadow-balance">.{jackDec}</span>
            </p>
          ) : (
            <p className="text-bungee-balance text-white shadow-balance">
              {balInt}
              <span className="text-dark shadow-balance">.{balDec}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
