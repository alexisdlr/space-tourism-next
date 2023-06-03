import Image from "next/image";

interface MenuButtonProps {
  onClick: () => void;
  isOpen: boolean;
}
const MenuButton = ({ isOpen, onClick }: MenuButtonProps) => {
  return (
    <button
      className="
        md:hidden
        w-20
        h-20
        flex
        items-center
        justify-center
        active:bg-transparent
        z-10
      "
      onClick={onClick}
    >
      {isOpen ? (
        <Image
          width={40}
          height={40}
          src="/images/shared/icon-close.svg"
          alt="Close"
        />
      ) : (
        <Image
          width={40}
          height={40}
          src="/images/shared/icon-hamburger.svg"
          alt="Open "
        />
      )}
    </button>
  );
};

export default MenuButton;
