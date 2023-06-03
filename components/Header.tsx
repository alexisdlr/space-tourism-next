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
    <header className="flex overflow-hidden justify-between items-center mt-2 md:py-20 lg:py-0 px-5 md:px-20 lg:px-0 md:h-20 md:fixed md:top-0 w-full">
      <div
        className="
          h-20
          flex
          items-center
          justify-center
          xl:pl-40
          lg:pl-20
        "
      >
        <Image
          width={50}
          height={50}
          className="object-cover"
          src={"./images/shared/logo.svg"}
          alt="logo"
        />
      </div>
      <ListOfRoutes
        routes={routes}
        className="
            hidden
            lg:flex
            lg:static
            lg:px-6
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
