export type GameResult = "idle" | "win" | "lose" | null;
import type { StaticImageData } from "next/image";

export interface SymbolDef {
  id: number;
  name: string;
  emoji: string | StaticImageData;
  value: number;
}

export interface SlotStore {
  balance: number;
  currentBet: number;
  reels: number[][];
  isSpinning: boolean;
  lastWin: number | null;
  gameResult: GameResult;
  jackpot: number;
  modalVisible: boolean;
  reelsStopped: number;
  spin: () => void;
  setBet: (amount: number) => void;
  incrementBet: () => void;
  decrementBet: () => void;

  notifyReelStopped: () => void;
  isEvaluatingResult: boolean;
  handlePulled: boolean;
  pullHandle: () => void;
  releaseHandle: () => void;
  jackpotWon: boolean;
  spinCount: number;
}
