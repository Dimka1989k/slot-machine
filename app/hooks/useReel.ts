"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { SYMBOLS } from "@/app/utils/symbols";

const STRIP_SIZE = 80;
const SPEED = 600;

export function useReel(symbols: number[], index: number, isSpinning: boolean, onStop: () => void) {
  const [symbolHeight, setSymbolHeight] = useState(142);
  const [strip, setStrip] = useState<number[]>([]);
  const [offset, setOffset] = useState(0);

  const raf = useRef<number | null>(null);
  const running = useRef(false);
  const offsetRef = useRef(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timeouts = useRef<NodeJS.Timeout[]>([]);


  useEffect(() => {
    const updateHeight = () => {
      setSymbolHeight(window.innerWidth <= 640 ? 96 : 142);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);


  useEffect(() => {
    offsetRef.current = offset;
  }, [offset]);


  useEffect(() => {
    const s = Array.from(
      { length: STRIP_SIZE },
      () => SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)].id
    );
    setStrip(s);
  }, []);

 
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isSpinning) {
      audio.currentTime = 0;
      audio.loop = true;
      audio.play().catch(() => {});
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [isSpinning]);

  
  const startSpin = useCallback(() => {
    if (!isSpinning || strip.length === 0) return;

    running.current = true;

    let last = performance.now();
    const speed = SPEED + index * 80;

    const loop = (t: number) => {
      if (!running.current) return;

      const dt = (t - last) / 1000;
      last = t;

      setOffset((o) => o + speed * dt);

      raf.current = requestAnimationFrame(loop);
    };

    raf.current = requestAnimationFrame(loop);
  }, [isSpinning, strip, index]);

  useEffect(() => {
    startSpin();
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [startSpin]);

 
  useEffect(() => {
    if (strip.length === 0) return;

    const old = symbolHeight === 142 ? 96 : 142;
    const scale = symbolHeight / old;

    const newOffset = offsetRef.current * scale;
    offsetRef.current = newOffset;
    setOffset(newOffset);
  }, [symbolHeight]);

  
  const stopReel = useCallback(
    (targetId: number) => {
      running.current = false;
      if (raf.current) cancelAnimationFrame(raf.current);

      const startOffset = offsetRef.current;
      const itemCount = strip.length;
      const total = itemCount * symbolHeight;

      let startIndex = Math.floor(startOffset / symbolHeight) % itemCount;

     
      let targetIndex = startIndex;
      for (let i = 0; i < itemCount; i++) {
        const idx = (startIndex + i) % itemCount;
        if (strip[idx] === targetId) {
          targetIndex = idx;
          break;
        }
      }

      const finalIndex = targetIndex + 3 * itemCount;
      const finalOffset = finalIndex * symbolHeight;

      const duration = 1500;
      const start = performance.now();

      const easeOut = (p: number) => 1 - Math.pow(1 - p, 3);

      const animate = (t: number) => {
        const p = Math.min((t - start) / duration, 1);
        const eased = easeOut(p);

        const current = startOffset + (finalOffset - startOffset) * eased;
        setOffset(current);

        if (p < 1) {
          raf.current = requestAnimationFrame(animate);
        } else {
          const normalized = ((finalOffset % total) + total) % total;
          setOffset(normalized);
          onStop();
        }
      };

      raf.current = requestAnimationFrame(animate);
    },
    [symbolHeight, strip, onStop]
  );

  useEffect(() => {
    if (!running.current || strip.length === 0) return;

    const delay = setTimeout(() => {
      stopReel(symbols[1]);
    }, 300 * index);

    timeouts.current.push(delay);

    return () => clearTimeout(delay);
  }, [symbols, strip, stopReel]);

  useEffect(() => {
    return () => {
      timeouts.current.forEach((t) => clearTimeout(t));
      timeouts.current = [];
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return {
    strip,
    offset,
    symbolHeight,
    audioRef,
  };
}
