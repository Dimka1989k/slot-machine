"use client";

import { useSlotLogic } from "@/app/hooks/useSlotLogic";
import styles from "./Lever.module.css";

export default function Lever() {  
  const { handlePulled } = useSlotLogic();

  return (
    <div className={styles.lever}>
      <div className={styles.shoulder}>    
        <div className={`${styles.arm} ${handlePulled ? styles.clicked : ""}`} />
      </div>
    </div>
  );
}
