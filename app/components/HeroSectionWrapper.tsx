import React, { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
};

export default function HeroSectionWrapper({ children }: SectionWrapperProps) {
  return (
    <section className="relative w-full flex flex-col gap-6 pt-40 xs:pt-38 sm:pt-36 md:pt-42 lg:pt-48 3xl:pt-64 px-8 md:px-14 lg:px-24 xl:px-28 2xl:px-32 3xl:px-72 bg-[#0b0b0b]">
      {children}
    </section>
  );
}
