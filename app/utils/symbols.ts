import type { SymbolDef } from "@/app/types";

import seven from "@/public/seven.svg";
import star from "@/public/star.svg";
import heart from "@/public/heart.svg";
import key from "@/public/key.svg";
import dolar from "@/public/dolar.svg";

export const SYMBOLS: SymbolDef[] = [
  { id: 0, name: "Seven", emoji: seven, value: 100 },
  { id: 1, name: "Star", emoji: star, value: 40 },
  { id: 2, name: "Heart", emoji: heart , value: 30 },
  { id: 3, name: "Key", emoji: key, value: 50 },
  { id: 4, name: "Dolar", emoji: dolar, value: 80 },
];

export function getSymbolById(id: number): SymbolDef {
  return SYMBOLS[id % SYMBOLS.length];
}