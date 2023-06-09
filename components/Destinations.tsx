"use client";
import { useEffect, useState } from "react";
import data from "@/data.json";
import { Destination } from "@/types";
import AnimatedBox from "./AnimatedBox";
import DestinationImage from "./DestinationImage";
import DestinationContent from "./DestinationContent";
import { AnimatePresence } from "framer-motion";

const Destinations = () => {
  const [isSelected, setIsSelected] = useState("Moon");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(
    data.destinations[0]
  );

  const handleDestinationClick = (destination: Destination) => {
    setIsLoading(true);

    setSelectedDestination(destination);
    setIsSelected(destination.name);
  };

  useEffect(() => {
    if (isLoading) {
      // Simular una carga asíncrona para esperar a que se reproduzca la animación
      setTimeout(() => {
        setIsLoading(false);
      }, 400);
    }
  }, [isLoading]);
  return (
    <div
      className="
      lg:grid 
      lg:grid-cols-1
      lg:gap-y-0
      xl:px-40 lg:px-20 
      md:justify-center 
      md:mt-10 
      h-full 
      flex 
      flex-col
      gap-y-20 
      justify-start 
      items-center"
    >
      <AnimatePresence>
        {isLoading ? (
          ""
        ) : (
          <AnimatedBox className="flex flex-col lg:flex-row w-full h-full gap-5 lg:gap-20">
            <DestinationImage destination={selectedDestination} />
            <DestinationContent
              destination={selectedDestination}
              destinations={data.destinations}
              handleClick={handleDestinationClick}
              isSelected={isSelected}
            />
          </AnimatedBox>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Destinations;
