import { SYMBOLS } from "@/app/utils/symbols";

export interface WinResult {
  winAmount: number;
  jackpotWon: boolean;
}

export function calculateWin(
  combos: number[],      
  bet: number,
  currentJackpot: number
): WinResult {
  const [a, b, c, d] = combos;


  const sevenId =
    SYMBOLS.find((s) => s.name.toLowerCase() === "seven")?.id ?? 0;

  let multiplier = 0;
  let jackpotWon = false;


  const counts: Record<number, number> = {};
  for (const id of combos) {
    counts[id] = (counts[id] || 0) + 1;
  }
  const maxCount = Math.max(...Object.values(counts));


  if (a === sevenId && b === sevenId && c === sevenId && d === sevenId) {
    multiplier = 100;
    jackpotWon = true;
  }


  else if (a === sevenId && b === sevenId && c === sevenId) {
    multiplier = 20;
  }

 
  else if (maxCount === 3) {
    multiplier = 5;
  }

 
  else if (maxCount === 2) {
    multiplier = 1.5;
  }

  const winAmount = bet * multiplier + (jackpotWon ? currentJackpot : 0);

  return {
    winAmount,
    jackpotWon,
  };
}
