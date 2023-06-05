"use client";

import { bellefair } from "@/app/fonts";
import { Destination } from "@/types";
import Image from "next/image";

interface DestinationItemProps {
  destination: Destination;
}

const DestinationImage = ({ destination }: DestinationItemProps) => {
  return (
    <div
      className="
          w-full 
          h-full 
          flex 
          flex-col
3         justify-center 
          items-center
          gap-y-10
        "
    >
      <p className="text-white text-xl lg:text-3xl font-light self-center lg:self-start justify-self-center uppercase tracking-[5px]">
        <span className="font-bold text-gray-600">01</span> pick your
        destination
      </p>
      <div className="relative w-60 h-60 lg:w-80 lg:h-80">
        <Image
          src={destination.images.webp}
          className="relative w-full h-full"
          fill
          alt={destination.name}
        />
      </div>
    </div>
  );
};

export default DestinationImage;
