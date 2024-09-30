import React from "react";
import Link from "next/link";
import { LogoForButtonRotated } from "../services/[serviceId]/HeroSection";

export default function Button(props: ButtonType) {
  if (props.asLink && props.href) {
    return (
      <div className="relative w-full flex justify-center pt-4 md:pt-8 z-30">
        <Link href={`/${props.href}`}>
          <button className="relative overflow-hidden w-fit flex items-center gap-2 py-4 px-12 text-[#000000] bg-[#ffffff]  rounded-full font-medium text-2xl xs:text-2xl sm:text-2xl md:text-2xl shadow-[0_0_15px_0_rgba(255,255,255,1)] hover:shadow-[0_0_25px_0_rgba(255,255,255,1)] duration-300">
            <LogoForButtonRotated
              fillColor="#000000"
              width={props.iconWidth}
              height={props.iconHeight}
            />
            {props.text}
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="relative w-full flex justify-center pt-4 md:pt-8 z-30">
      <button className="relative overflow-hidden w-fit flex items-center gap-2 py-4 px-12 text-[#000000] bg-[#ffffff]  rounded-full font-medium text-2xl xs:text-2xl sm:text-2xl md:text-2xl shadow-[0_0_15px_0_rgba(255,255,255,1)] hover:shadow-[0_0_25px_0_rgba(255,255,255,1)] duration-300">
        <LogoForButtonRotated
          fillColor="#000000"
          width={props.iconWidth}
          height={props.iconHeight}
        />
        {props.text}
      </button>
    </div>
  );
}

export type ButtonType = {
  type?: "button" | "submit" | "link";
  asLink?: boolean;
  href?: string;
  iconWidth: number;
  iconHeight: number;
  text: string;
};
