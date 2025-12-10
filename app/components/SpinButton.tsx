"use client";

import Image from "next/image";
import { useSpinButton } from "@/app/hooks/useSpinButton";

import spinButton from "@/public/spin-button2.svg";
import spinPressed from "@/public/spin-button-pressed.svg";

export function SpinButton() {
  const { onSpin, canSpin, soundRef } = useSpinButton();

  return (
    <>
      <audio ref={soundRef} src="/sounds/lever.mp3" preload="auto" />
      <div className="flex justify-center relative mt-18.5 max-sm:mt-13">
        <button
          onClick={onSpin}
          disabled={!canSpin}
          className={`
            group relative cursor-pointer select-none
            ${!canSpin ? "pointer-events-none" : ""}
          `}
        >
          <div className="relative w-[201px] md:w-[250px] h-40 md:h-[201px] overflow-hidden">
            <Image
              src={spinButton}
              alt="Spin Base"
              className="absolute inset-0 w-full h-full z-0 select-none"
            />
            <div
              className={`
                absolute inset-0 w-full flex justify-center z-10
                transition-all duration-150 ease-out
                ${
                  canSpin
                    ? "group-active:translate-y-0.5 group-active:scale-y-[0.87]"
                    : ""
                }
                ${
                  canSpin
                    ? "md:group-active:translate-y-1.5 md:group-active:scale-y-[0.87] md:group-active:scale-x-[1.01]"
                    : ""
                }
              `}
            >
              <Image
                src={spinPressed}
                alt="Pressed"
                className="relative -top-3 md:-top-4 w-full select-none"
              />
            </div>
          </div>
        </button>
      </div>
    </>
  );
}
