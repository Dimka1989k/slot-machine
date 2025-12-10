"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    audio.volume = 0.1;
    audio.loop = true;

    const playAudio = () => {
      audio.play().catch(() => {});
    };

    window.addEventListener("click", playAudio, { once: true });
    playAudio();

    return () => audio.pause();
  }, []);

  return <audio ref={audioRef} src="/sounds/game.mp3" preload="auto" />;
}
