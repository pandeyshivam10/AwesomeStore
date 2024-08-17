"use client";

import HomeItems from "@/components/homeItems";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen pt-24 bg-gradient-to-b from-gray-900 via-gray-700 to-gray-800 overflow-hidden">
      {/* Animated radial gradient */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 animate-pulse opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-30"></div>
      </div>
      <div className="relative z-10">
        <HomeItems />
      </div>
      <Toaster position="top-center" />
    </div>
  );
}
