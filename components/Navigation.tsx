"use client";

import Link from "next/link";
import { useState } from "react";
import MenuButton from "./MenuButton";
import { AnimatePresence, motion } from "framer-motion";
import { Route } from "@/types";
import ListOfRoutes from "./ListOfRoutes";

interface NavigationProps {
  routes: Array<Route>;
}

const Navigation = ({ routes }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ x: [500, 0] }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            exit={{ x: 500 }}
            className="fixed top-0 bottom-0 right-0 w-[60%] md:static md:block md:w-auto md:translate-x-0"
          >
            <ListOfRoutes routes={routes} />
          </motion.div>
        )}
      </AnimatePresence>

      <MenuButton onClick={handleClick} isOpen={isOpen} />
    </>
  );
};

export default Navigation;
