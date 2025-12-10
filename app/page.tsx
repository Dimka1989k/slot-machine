import { SlotMachine } from "@/app/components/SlotMachine";

import Header from "./components/Home/Header";
import Background from "./components/Home/Background";
import Decorations from "./components/Home/Decorations";

export default function HomePage() {
  return (
    <>
      <div className="relative">       
        <Header />
        <SlotMachine />
        <Decorations />
        <Background />
      </div>
    </>
  );
}
