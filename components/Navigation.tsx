"use client";

import Link from "next/link";
import { useState } from "react";
import MenuButton from "./MenuButton";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";

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

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const matches = useMediaQuery("(min-width: 768px)"); // Establece aquí el ancho de pantalla mínimo para mostrar el menú

  const hydrationCondition = typeof window !== "undefined";
  const condition = isOpen || matches;
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AnimatePresence>
        {hydrationCondition && condition && (
          <motion.div
            animate={{ x: [500, 0] }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            exit={{ x: 500 }}
            className="fixed top-0 bottom-0 right-0 w-[60%] md:static md:block md:w-auto md:translate-x-0"
          >
            <ul
              className={`
                flex
              bg-white/10
                backdrop-blur-[0.5rem]
                h-screen
                fixed
                flex-col
                gap-y-20
                text-xl
                items-start
                justify-center
                right-0
                top-0
                w-[60%]
                pl-10
                shadow-xl
                md:flex
                md:static
                md:px-6
                md:text-base
                md:tracking-normal
                md:pt-0
                md:h-20
                md:w-auto
                md:flex-row
                md:items-center
                gap-x-4
             `}
            >
              {routes.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      uppercase
                      hover:underline
                      tracking-widest	
                    "
                  >
                    <span className="font-bold">0{item.id}</span> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <MenuButton onClick={handleClick} isOpen={isOpen} />
    </>
  );
};

export default Navigation;
