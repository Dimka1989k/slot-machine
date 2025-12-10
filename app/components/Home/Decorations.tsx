"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";

import number from "@/public/landing/desktop/7.svg";
import cherry from "@/public/landing/desktop/chery.svg";
import crystall from "@/public/landing/desktop/crystall1.svg";
import smile from "@/public/landing/desktop/icon-smile.svg";
import lemon from "@/public/landing/desktop/lemon.svg";
import crown from "@/public/landing/desktop/сrown.svg";
import numberLeft from "@/public/landing/desktop/7-left.svg";
import selectLeft from "@/public/landing/icon-select-left.svg";
import selectRight from "@/public/landing/iocn-select-right.svg";
import smileSmall from "@/public/landing/desktop/smile-small.svg";

import selectMobile from "@/public/landing/select-half.svg";
import selectRightHalf from "@/public/landing/iocn-select-right.svg";
import SelectSmallHalf from "@/public/landing/select-small-half.svg";
import selectBalance from "@/public/landing/select-balance.svg";
import selectRightSmall from "@/public/landing/select-right.svg";
import select from "@/public/landing/select+.svg";

type Decoration = {
  src: StaticImageData;
  alt: string;
  className: string;
};

const decorations: Decoration[] = [
  {
    src: select,
    alt: "select",
    className:
      "size-5 animate-float absolute min-[769px]:hidden min-[376px]:max-[640px]:-bottom-20 min-[640px]:max-[769px]:bottom-14 min-[640px]:max-[769px]:left-114 left-60 -bottom-12 z-999",
  },
  {
    src: selectRightSmall,
    alt: "selectRightSmall",
    className:
      "size-5 animate-float absolute min-[769px]:hidden min-[376px]:max-[640px]:-bottom-36 min-[640px]:max-[769px]:bottom-12 min-[640px]:max-[769px]:left-109 left-64 -bottom-27 z-999",
  },
  {
    src: selectLeft,
    alt: "selectLeft",
    className:
      "size-5 animate-float absolute min-[769px]:hidden min-[376px]:max-[640px]:-bottom-52 min-[640px]:max-[769px]:bottom-1 min-[640px]:max-[769px]:left-45 left-31 -bottom-24 z-999",
  },
  {
    src: selectLeft,
    alt: "selectLeft-big",
    className:
      "size-6 animate-float absolute min-[769px]:hidden min-[376px]:max-[640px]:-bottom-52 min-[640px]:max-[769px]:bottom-1 min-[640px]:max-[769px]:left-45 left-31 -bottom-24 z-999",
  },
  {
    src: selectLeft,
    alt: "selectLeft-right",
    className:
      "animate-float absolute min-[769px]:hidden min-[376px]:max-[640px]:-bottom-52 min-[640px]:max-[769px]:bottom-1 min-[640px]:max-[769px]:right-45 right-12 -bottom-38 z-9999",
  },
  {
    src: selectBalance,
    alt: "selectBalance",
    className:
      "animate-float absolute min-[769px]:hidden min-[376px]:max-[640px]:-bottom-52 min-[640px]:max-[769px]:bottom-1 min-[640px]:max-[769px]:left-45 left-10 -bottom-42 z-9999",
  },
  {
    src: SelectSmallHalf,
    alt: "SelectSmallHalf",
    className:
      "animate-float absolute min-[769px]:hidden min-[376px]:max-[640px]:-bottom-37 min-[640px]:max-[769px]:bottom-6 left-0 -bottom-26 z-999",
  },
  {
    src: selectRightHalf,
    alt: "selectRightHalf",
    className:
      "animate-float absolute min-[769px]:hidden min-[376px]:max-[640px]:-bottom-15 min-[640px]:max-[769px]:bottom-14 right-0 -bottom-10 z-999",
  },
  {
    src: selectMobile,
    alt: "selectMobile",
    className:
      "animate-float absolute min-[769px]:hidden min-[376px]:max-[640px]:-bottom-14 min-[640px]:max-[769px]:bottom-14 left-0 -bottom-10 z-999",
  },
  {
    src: crown,
    alt: "crown",
    className:
      "w-[54px] h-24 animate-float absolute top-40 left-6 max-[769px]:hidden max-xl:top-32 max-lg:top-35",
  },
  {
    src: smileSmall,
    alt: "smileSmall",
    className:
      "w-[31px] h-[31px] animate-float absolute top-80 left-18 max-[769px]:hidden max-xl:top-62 max-lg:top-56",
  },
  {
    src: cherry,
    alt: "cherry",
    className:
      "w-[54px] h-24 animate-float absolute bottom-60 left-0 max-[769px]:hidden max-xl:bottom-62 max-lg:bottom-56",
  },
  {
    src: selectLeft,
    alt: "selectLeft-circle",
    className:
      "w-9 h-9 animate-float absolute bottom-60 left-97 max-[769px]:hidden max-xl:left-60 max-xl:bottom-62 max-lg:bottom-56 max-lg:left-45",
  },
  {
    src: selectRight,
    alt: "selectRight",
    className:
      "w-9 h-9 animate-float absolute top-46 right-0 max-[769px]:hidden max-xl:right-20 max-xl:top-72 max-lg:top-76 max-lg:right-15",
  },
  {
    src: crystall,
    alt: "crystall",
    className:
      "animate-float absolute top-96 right-0 max-[769px]:hidden max-xl:top-82 max-lg:top-86",
  },
  {
    src: selectLeft,
    alt: "selectLeft-large",
    className:
      "w-[101px] h-[102px] animate-float absolute bottom-44 right-1 max-[769px]:hidden max-xl:right-1 max-xl:bottom-32 max-lg:bottom-35 max-lg:right-4",
  },
  {
    src: numberLeft,
    alt: "numberLeft",
    className:
      "z-999 animate-float absolute bottom-22 right-3 max-[769px]:hidden max-xl:right-2 max-xl:bottom-6 max-lg:bottom-15 max-lg:right-3",
  },
  {
    src: lemon,
    alt: "lemon",
    className:
      "animate-float absolute bottom-24 right-57 max-[769px]:hidden max-xl:right-44 max-xl:bottom-12 max-lg:bottom-14 max-lg:right-26",
  },
  {
    src: smile,
    alt: "smile",
    className:
      "animate-float absolute bottom-23 left-6 max-[769px]:hidden max-xl:left-2 max-xl:bottom-8 max-lg:bottom-15 max-lg:left-3",
  },
  {
    src: number,
    alt: "number",
    className:
      "animate-float absolute bottom-23 left-102 max-[769px]:hidden max-xl:left-60 max-xl:bottom-16 max-lg:bottom-18 max-lg:left-35",
  },
];

export default function Decorations() {
  return (
    <>
      {decorations.map((item, index) => (
        <Image
          key={`${item.alt}-${index}`}
          src={item.src}
          alt={item.alt}
          className={item.className}
        />
      ))}
    </>
  );
}
