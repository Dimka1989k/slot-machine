"use client";

import { useEffect, useRef, useMemo } from "react";
import { useSlotLogic } from "@/app/hooks/useSlotLogic";

export function useLoseModal(open: boolean) {
  const { balance } = useSlotLogic();

  const audioRef = useRef<HTMLAudioElement | null>(null);
 
  useEffect(() => {
    const audio = audioRef.current;

    if (open && audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [open]);

 
  const formatted = useMemo(() => {
    const val = balance.toFixed(2);
    const [intPart, decimalPart] = val.split(".");
    return { intPart, decimalPart };
  }, [balance]);

  return {
    audioRef,
    ...formatted,
  };
}
