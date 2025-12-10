import Image from "next/image";

import city from "@/public/tokiocity.svg";
import cloud from "@/public/cloud.svg";
import cloudSmall from "@/public/cloud-small.svg";

export default function Background() {
  return (
    <>     
       <Image
          src={city}
          alt="city"
          className="absolute bottom-14 -z-1 max-sm:hidden min-[640px]:max-[768px]:bottom-8"
        />
        <Image
          src={cloud}
          alt="cloud"
          className="absolute -bottom-16 max-sm:hidden  min-[640px]:max-[1023px]:-bottom-8"
        />
        <Image
          src={cloudSmall}
          alt="cloud"
          className="absolute -bottom-42 w-full sm:hidden min-[376px]:max-[481px]:-bottom-55 min-[480px]:max-[640px]:-bottom-75"
        />
    </>
  );
}
