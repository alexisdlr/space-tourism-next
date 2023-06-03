import { Route } from "@/types";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ListOfRoutesProps {
  routes: Array<Route>;
  className?: string;
}

const ListOfRoutes = ({ routes, className }: ListOfRoutesProps) => {
  return (
    <ul
      className={twMerge(
        `
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
        <li key={item.href}>
          <Link
            href={item.href}
            className="
            uppercase
            hover:underline
            sm:text-md
            lg:text-sm
            py-6
            px-8
          "
          >
            <span className="font-bold">0{item.id}</span> {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListOfRoutes;
