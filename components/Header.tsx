import Image from "next/image";
import Navigation from "./Navigation";
interface HeaderProps {}

const Header = () => {
  return (
    <header className="flex overflow-hidden justify-between items-center mt-2 md:h-20 md:fixed md:top-0 w-full">
      <div
        className="
          w-20
          h-20
          flex
          items-center
          justify-center
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
      <Navigation />
    </header>
  );
};

export default Header;
