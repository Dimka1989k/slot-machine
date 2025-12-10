"use client";

import { create } from "zustand";
import type { SlotStore } from "@/app/types";
import { calculateWin } from "@/app/utils/calculateWin";
import { SYMBOLS } from "@/app/utils/symbols";

const MIN_BET = 10;
const MAX_BET = 1000;

function randomSymbolId() {
  return Math.floor(Math.random() * SYMBOLS.length);
}

function createReelWithCenter(centerId: number): number[] {
  return [randomSymbolId(), centerId, randomSymbolId()];
}

export const useSlotStore = create<SlotStore>((set, get) => ({
  balance: 1000,
  currentBet: 10,
  reels: Array.from({ length: 4 }, () => [
    randomSymbolId(),
    randomSymbolId(),
    randomSymbolId(),
  ]),
  isSpinning: false,
  lastWin: null,
  gameResult: "idle",
  jackpot: 500,
  modalVisible: false,
  isEvaluatingResult: false,
  stoppedCount: 0,
  reelsStopped: 0,
  handlePulled: false,
  jackpotWon: false,
  spinCount: 0,
  pullHandle: () => set({ handlePulled: true }),
  releaseHandle: () => set({ handlePulled: false }),

  setBet: (amount) => {
    if (isNaN(amount)) return;
    let clamped = Math.min(amount, MAX_BET);
    if (amount >= MIN_BET) {
      clamped = Math.max(MIN_BET, clamped);
    }

    set({ currentBet: clamped });
  },

  incrementBet: () => {
    const { currentBet } = get();
    get().setBet(Math.min(currentBet + 1, MAX_BET));
  },

  decrementBet: () => {
    const { currentBet } = get();
    get().setBet(Math.max(currentBet - 1, MIN_BET));
  },

  spin: () => {
  const { currentBet, balance, isSpinning, jackpot, spinCount } = get();
  if (isSpinning || currentBet > balance) return;


  set({ spinCount: spinCount + 1 });

  set({
    isSpinning: true,
    isEvaluatingResult: true,
    modalVisible: false,
    reelsStopped: 0,
    lastWin: null,
    gameResult: "idle",
    balance: balance - currentBet,
    jackpot: jackpot + Math.floor(currentBet * 0.5),
  });

  let centers;


  if (spinCount + 1 === 4) {
    centers = [0, 0, 0, 0]; 
  } else {
    centers = [0, 1, 2, 3].map(() => randomSymbolId());
  }

  const finalFrames = centers.map((c) => createReelWithCenter(c));
  set({ reels: finalFrames });

  const updated = get();
  const { winAmount, jackpotWon } = calculateWin(
    centers,
    updated.currentBet,
    updated.jackpot
  );

  let newBalance = updated.balance;
  let newJackpot = updated.jackpot;

  if (winAmount > 0) newBalance += winAmount;
  if (jackpotWon) newJackpot = 500;

  set({
    lastWin: winAmount || null,
    gameResult: winAmount > 0 ? "win" : "lose",
    jackpot: newJackpot,
    jackpotWon: jackpotWon,
  });
},


  notifyReelStopped: () => {
    const { reelsStopped } = get();
    const updated = reelsStopped + 1;

    set({ reelsStopped: updated });

    if (updated < 4) return;

    set({
      isSpinning: false,
      isEvaluatingResult: true,
    });

    setTimeout(() => {
      set({ modalVisible: true });
      setTimeout(() => {
        set({
          modalVisible: false,
          isEvaluatingResult: false,
        });
      }, 2500);
    }, 1200);

    set({ reelsStopped: 0 });
  },
}));
