import React, { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
};

export default function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <section className="relative w-full flex flex-col gap-6 pt-20 sm:pt-20 md:pt-16 lg:pt-24 3xl:pt-28 pb-4 px-6 md:px-14 lg:px-24 xl:px-28 2xl:px-32 3xl:px-72 bg-[#0b0b0b]">
      {children}
    </section>
  );
}
