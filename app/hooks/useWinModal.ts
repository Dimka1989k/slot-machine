"use client";

import { useEffect, useRef, useMemo } from "react";
import { useSlotLogic } from "@/app/hooks/useSlotLogic";

export function useWinModal(open: boolean) {
  const { lastWin } = useSlotLogic();

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
    const value = (lastWin ?? 0).toFixed(2);
    const [intPart, decimalPart] = value.split(".");
    return { intPart, decimalPart };
  }, [lastWin]);

  return {
    audioRef,
    ...formatted,
  };
}
