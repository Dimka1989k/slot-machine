"use client";

import { useState, useEffect, useCallback } from "react";
import { useSlotLogic } from "@/app/hooks/useSlotLogic";

const MIN_BET = 10;
const MAX_BET = 1000;

export function useBetControls() {
  const {
    currentBet,
    incrementBet,
    decrementBet,
    setBet,
    isSpinning,
    balance,
  } = useSlotLogic();

  const disabled = isSpinning || balance <= 0;

  const [inputValue, setInputValue] = useState(String(currentBet));


  useEffect(() => {
    setInputValue(currentBet.toString());
  }, [currentBet]);

 
  const handleInputChange = useCallback(
    (value: string) => {
      let raw = value.replace(/[^0-9.]/g, "");
      const parts = raw.split(".");
      if (parts.length > 2) return; 

      setInputValue(raw);

      const num = Number(raw);
      if (!isNaN(num)) {
        setBet(num);
      }
    },
    [setBet]
  );


  const handleBlur = useCallback(() => {
    const num = Number(inputValue);

    if (isNaN(num)) {
      setInputValue(currentBet.toString());
      return;
    }

    let final = num;

    if (final < MIN_BET) final = MIN_BET;
    if (final > MAX_BET) final = MAX_BET;
    if (final > balance) final = balance;

    setBet(final);

    setInputValue(
      final.toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      })
    );
  }, [inputValue, currentBet, balance, setBet]);

  return {
    disabled,
    inputValue,
    setInputValue,
    incrementBet,
    decrementBet,
    handleInputChange,
    handleBlur,
  };
}
