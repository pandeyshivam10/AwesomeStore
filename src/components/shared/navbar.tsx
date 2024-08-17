"use client";

import useStore from "@/lib/store";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const cartSize = useStore((state) => state.cart.length);

  return (
    <nav className="w-full h-16 px-10 max-md:px-6 fixed top-0 left-0 z-50 bg-black text-white flex justify-between items-center shadow-lg">
      <Link href={"/"} className="text-[1.5rem] font-bold tracking-wide">
        AwesomeStore
      </Link>
      <div className="flex gap-10 max-md:gap-4 items-center">
        <Link href={"/"} className="text-sm font-medium hover:underline transition-colors duration-200">
          Home
        </Link>
        <Link href={"/"} className="text-sm font-medium hover:underline transition-colors duration-200">
          About
        </Link>
        <Link href={"/cart"} className="relative flex items-center">
          <div className="flex flex-col justify-center items-center gap-0">
            <p className="text-[10px] bg-red-600 rounded-full w-5 h-5 flex items-center justify-center absolute -top-3 -right-3">
              {cartSize}
            </p>
            <ShoppingCart className="cursor-pointer text-white hover:text-gray-300 transition-colors duration-200" size={24} />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
