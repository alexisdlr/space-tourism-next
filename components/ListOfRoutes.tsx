"use client";

import { Route } from "@/types";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface ListOfRoutesProps {
  routes: Array<Route>;
  className?: string;
}

const ListOfRoutes = ({ routes, className }: ListOfRoutesProps) => {
  const [isActive, setIsActive] = useState("Home");

  return (
    <ul
      className={twMerge(
        `
        flex
      bg-white/10
        backdrop-blur-[2px]
        h-screen
        fixed
        flex-col
        gap-y-20
        text-xl
        items-start
        justify-center
        right-0
        top-0
        w-[70%]
        md:w-[60%]
        pl-10
        shadow-xl
        gap-x-4
      `,
        className
      )}
    >
      {routes.map((item) => (
        <li key={item.href} onClick={() => setIsActive(item.label)}>
          <Link
            href={item.href}
            className={`
            uppercase
            sm:text-md
            lg:text-sm
            tracking-widest
            h-full
            w-full
            flex
            items-center
            p-5
            gap-1            
            border-b-transparent
            hover:border-b-2
            hover:border-white
            ${isActive === item.label ? "border-b-2" : ""}
            ${isActive === item.label ? "border-white" : "border-b-transparent"}
          `}
          >
            <span className="font-bold">0{item.id}</span> {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListOfRoutes;
