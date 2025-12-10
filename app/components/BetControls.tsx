"use client";

import Image from "next/image";
import buttonPlus from "@/public/button-plus.svg";
import buttonMinus from "@/public/button-minus.svg";
import buttonRed from "@/public/button-red.svg";

import { useBetControls } from "@/app/hooks/useBetControls";

export function BetControls() {
  const {
    disabled,
    inputValue,
    incrementBet,
    decrementBet,
    handleInputChange,
    handleBlur,
  } = useBetControls();

  return (
    <div className="flex flex-col items-center justify-center gap-4.5 mt-4.5">
      <p className="text-blue text-bungee drop-shadow-bit font-outline-bit">
        Place a bid
      </p>
      <div className="flex items-center justify-center gap-3 w-full">
        <button
          disabled={disabled}
          onClick={decrementBet}
          className={`transition-all active:translate-y-0.5 active:scale-95 ${
            disabled ? "pointer-events-none" : "cursor-pointer"
          }`}
        >
          <Image
            src={buttonMinus}
            alt="buttonMinus"
            className="w-15.5 h-16 select-none"
          />
        </button>

        <div className="bg-input w-[189px] h-[62px] flex items-center pt-1.5">
          <Image
            src={buttonRed}
            alt="buttonRed"
            className="w-[25px] h-[25px] ml-4.5 select-none"
          />

          <input
            type="text"
            disabled={disabled}
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
            onBlur={handleBlur}
            className="w-full max-w-[129px] bg-transparent outline-none text-start rounded-full text-bungee text-white shadow-text-input"
          />
        </div>

        <button
          disabled={disabled}
          onClick={incrementBet}
          className={`transition-all active:translate-y-0.5 active:scale-95 ${
            disabled ? "pointer-events-none" : "cursor-pointer"
          }`}
        >
          <Image
            src={buttonPlus}
            alt="buttonPlus"
            className="w-15.5 h-16 select-none"
          />
        </button>
      </div>
    </div>
  );
}
