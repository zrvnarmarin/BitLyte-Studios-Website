"use client";

import { useEffect } from "react";
import { animatePageIn } from "./utils/animations/animations";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
      <div className="z-40">
        <div
          id="banner-1"
          className="min-h-screen bg-[#0b0b0b] fixed top-0 left-0 w-1/4 z-50"
        />
        <div
          id="banner-2"
          className="min-h-screen bg-[#0b0b0b] flex items-center justify-end fixed top-0 left-1/4 w-1/4 z-50 pr-4 "
        >
          <p className="flex flex-col text-[#ffffff] text-lg sm:text-xl lg:text-9xl font-bold">
            BitLyte
          </p>
        </div>
        <div
          id="banner-3"
          className="min-h-screen bg-[#0b0b0b] flex items-center justify-start fixed top-0 left-2/4 w-1/4 z-50 pl-4 "
        >
          <p className="text-[#ffffff] text-lg sm:text-xl lg:text-9xl font-bold">
            Studios
          </p>
        </div>
        <div
          id="banner-4"
          className="min-h-screen bg-[#0b0b0b]  fixed top-0 left-3/4 w-1/4 z-50"
        />
        {children}
      </div>
  );
}