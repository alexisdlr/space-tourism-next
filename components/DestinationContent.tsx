import { bellefair } from "@/app/fonts";
import { Destination } from "@/types";

interface DestinationContentProps {
  isSelected: string;
  destination: Destination;
  destinations: Array<Destination>;
  handleClick: (destination: Destination) => void;
}
const DestinationContent = ({
  destination,
  destinations,
  handleClick,
  isSelected,
}: DestinationContentProps) => {
  return (
    <div
      className="
        h-full 
        flex 
        flex-col 
        gap-8 
        justify-center 
        items-center
        lg:items-start 
        text-center 
        lg:text-left 
      "
    >
      <ul className="flex justify-center lg:gap-x-10 gap-x-5">
        {destinations.map((planet) => (
          <li
            onClick={() => handleClick(planet)}
            key={planet.name}
            className={`
            tracking-[5px] 
            uppercase 
            cursor-pointer
            border-b-2
            transition
            hover:border-white
            flex
            justify-center
            items-center
            ${
              isSelected === planet.name ? "border-white" : "border-transparent"
            }`}
          >
            {planet.name}
          </li>
        ))}
      </ul>
      <span className={bellefair.className}>
        <h1 className="text-white text-5xl lg:text-9xl uppercase tracking-widest">
          {destination.name}
        </h1>
      </span>
      <p className="text-paragraph text-sm leading-6 lg:text-xl tracking-wide md:leading-8 w-full px-6 md:px-16 lg:px-0">
        {destination.description}
      </p>
      <hr />
    </div>
  );
};

export default DestinationContent;
