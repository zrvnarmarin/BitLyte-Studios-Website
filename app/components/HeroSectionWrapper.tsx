import React, { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
};

export default function HeroSectionWrapper({ children }: SectionWrapperProps) {
  return (
    <section className="relative w-full flex flex-col gap-6 pt-32 sm:pt-12 md:pt-16 lg:pt-28 px-8 md:px-14 lg:px-24 xl:px-28 2xl:px-32 3xl:px-72 bg-[#0b0b0b]">
      {children}
    </section>
  );
}
