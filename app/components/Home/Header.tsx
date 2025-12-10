import Image from "next/image";
import backButton from "@/public/button-back.svg";
import buttonQuestion from "@/public/button-question.svg";
import iconBack from "@/public/icon-back.svg";
import banner from "@/public/banner1.svg";

import bgTop from "@/public/bg-top.png";
import bgTop1 from "@/public/bg-top.svg";

export default function Header() {
  return (
    <>
      <Image
        src={bgTop}
        alt="Background Top"
        className="w-full pointer-events-none select-none h-auto max-h-96 max-sm:hidden"
      />
      <Image
        src={bgTop1}
        alt="Background Top"
        className="w-full pointer-events-none select-none h-auto sm:hidden"
      />
      <div className="flex align-center justify-center">
        <div className="flex relative max-w-209 w-full justify-between align-center -top-15">
          <div className="relative max-sm:hidden">
            <Image
              src={iconBack}
              alt="iconBack"
              className="pointer-events-none select-none absolute top-11.5 left-14 z-99"
            />
            <Image
              src={backButton}
              alt="backButton"
              className="pointer-events-none select-none relative -top-2"
            />
          </div>
          <Image
            src={banner}
            alt="banner"
            className="w-full pointer-events-none select-none shadow-baner relative max-w-[340px] max-sm:max-w-[228px]  max-sm:left-1/2 max-sm:top-9 max-sm:-translate-x-1/2 "
          />
          <p className="w-full ml-6  max-sm:ml-10  max-w-[230px] font-pocket absolute left-1/2  max-sm:text-[28px] max-sm:top-11 top-11 -translate-x-1/2 color-blue text-head font-outline-2 shadow-text">
            Tokio Slots
          </p>
          <Image
            src={buttonQuestion}
            alt="buttonQuestion"
            className="pointer-events-none select-none relative -top-2 max-sm:hidden"
          />
        </div>
      </div>
    </>
  );
}
