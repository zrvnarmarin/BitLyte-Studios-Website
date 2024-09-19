import React from "react";
import SectionWrapper from "@/app/components/SectionWrapper";

export const ParagraphSection = () => {
  return (
    <SectionWrapper>
      <h3 className="relative w-full text-3xl xs:text-4xl sm:text-5xl text-[#ffffff] font-medium text-center xs:font-normal z-20 py-4 sm:py-8 md:py-6 xl:px-36">
        We helped businesses increase sales by{" "}
        <span className="custom-text">27%</span>. Your product`s achievements is
        our success. Our design approach is result-driven and it`s crucial for
        us to make your product reach it`s business metrics.
        <div className="w-48 h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
      </h3>
    </SectionWrapper>
  );
};

export default ParagraphSection;
