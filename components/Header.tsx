import Image from "next/image";
import Navigation from "./Navigation";
import ListOfRoutes from "./ListOfRoutes";

const routes = [
  {
    id: 1,
    label: "home",
    href: "/",
  },
  {
    id: 2,
    label: "destination",
    href: "/destinations",
  },
  {
    id: 3,
    label: "crew",
    href: "/crew",
  },
  {
    id: 4,
    label: "technology",
    href: "/technologies",
  },
];

const Header = () => {
  return (
    <header
      className="
      lg:fixed 
      lg:top-0 
      lg:py-2
      lg:px-0 
      md:py-20 
      md:px-20 
      md:h-20 
      flex 
      overflow-hidden 
      justify-between 
      items-center 
      mt-4
      px-5 
      w-full"
    >
      <div
        className="
          relative
          w-12
          h-12
          md:w-16
          md:h-16
          flex
          items-center
          justify-center
          xl:pl-40
          lg:pl-20
        "
      >
        <Image
          className="relative w-full h-full object-contain"
          fill
          src={"./images/shared/logo.svg"}
          alt="logo"
        />
      </div>

      <div className="hidden lg:block lg:absolute lg:top-10 lg:left-[20%] w-1/3 h-[2px]">
        <Image src={"/images/Rectangle.png"} alt="rectangle" fill />
      </div>

      <ListOfRoutes
        routes={routes}
        className="
            hidden
            lg:flex
            lg:gap-10
            lg:static
            lg:px-20
            lg:text-base
            lg:tracking-normal
            lg:pt-0
            lg:h-20
            lg:w-auto
            lg:flex-row
            lg:items-center
          "
      />
      <Navigation routes={routes} />
    </header>
  );
};

export default Header;
