"use client";

import { useRef, useCallback, useEffect } from "react";
import { useSlotLogic } from "@/app/hooks/useSlotLogic";

export function useSpinButton() {
  const { spin, canSpin, pullHandle, releaseHandle } = useSlotLogic();
  const soundRef = useRef<HTMLAudioElement | null>(null);  
  const timeouts = useRef<NodeJS.Timeout[]>([]);  
  
  useEffect(() => {
    return () => {
      timeouts.current.forEach((t) => clearTimeout(t));
      timeouts.current = [];
    };
  }, []);

  const onSpin = useCallback(() => {
    if (!canSpin) return;

   
    if (soundRef.current) {
      soundRef.current.currentTime = 0;
      soundRef.current.play().catch(() => {});
    }

    pullHandle();

   
    const spinTimeout = setTimeout(() => {
      spin();
    }, 450);

   
    const releaseTimeout = setTimeout(() => {
      releaseHandle();
    }, 600);

    timeouts.current.push(spinTimeout, releaseTimeout);
  }, [canSpin, pullHandle, releaseHandle, spin]);

  return { onSpin, canSpin, soundRef };
}
