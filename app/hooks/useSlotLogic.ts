"use client";

import { useSlotStore } from "@/app/store/useSlotStore";

export function useSlotLogic() {
  const {
    balance,
    currentBet,
    reels,
    isSpinning,
    lastWin,
    gameResult,
    jackpot,
    modalVisible,
    spin,
    setBet,
    incrementBet,
    decrementBet,
    notifyReelStopped,
    isEvaluatingResult,
    handlePulled,
    pullHandle,
    releaseHandle,
    jackpotWon
  } = useSlotStore();

  const MIN_BET = 10;
  const MAX_BET = 1000;

  const canSpin =
    !isSpinning &&
    !modalVisible &&
    !isEvaluatingResult &&
    currentBet >= MIN_BET &&
    currentBet <= MAX_BET &&
    currentBet <= balance;

  return {
    balance,
    currentBet,
    reels,
    isSpinning,
    lastWin,
    gameResult,
    jackpot,
    modalVisible,
    canSpin,
    spin,
    setBet,
    incrementBet,
    decrementBet,
    notifyReelStopped,
    isEvaluatingResult,
    handlePulled,
    pullHandle,
    releaseHandle,
    jackpotWon
  };
}
