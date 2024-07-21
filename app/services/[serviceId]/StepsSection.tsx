import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/SectionWrapper";

export default function StepsSection() {

  return (
      <SectionWrapper>
        <p className="w-full text-start text-4xl text-[#ffffff]">
          Explore how landing page
          <span className="linear-gradient-purple-text"> boosts conversions </span> and makes your <span className="linear-gradient-purple-text"> product more impactful </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1,2,3,4].map(n =>
                <div key={n} className="flex flex-col gap-4 text-base text-[#eeeeee] font-normal py-8 text-start px-5 rounded-lg bg-gradient-to-r from-[#292929] to-[#393939]">
                    <span className="text-3xl text-[#ffffff] pl-2">
                        <span className="linear-gradient-purple-text font-black">
                            {" "}  1. {" "}
                        </span>
                        Discovery
                    </span>
                    Through in-depth research, market analysis, and collaborative discussions,
                    we unearth key insights that serve as the foundation for our strategy.
                </div>
            )}
        </div>
    </SectionWrapper>
  )
}

