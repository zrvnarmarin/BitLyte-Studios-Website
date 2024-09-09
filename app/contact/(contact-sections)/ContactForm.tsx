import React from "react";
import Image from "next/image";
import { Logo } from "@/app/services/[serviceId]/StepsSection";
import "../../../public/test.css";
import { LogoArrowRight } from "@/app/(home-sections)/ProjectsSection";

export default function ContactForm() {
  return (
    // Form container
    <div className="flex flex-col gap-8 z-20 overflow-hidden relative px-4 py-6 md:px-10 sm:px-8 sm:py-10 md:py-14 lg:px-6 lg:py-10 xl:px-12 xl:py-12 rounded-lg bg-gradient-to-r from-[#0b0b0b] to-[#27a5ff2b]">

      {/* <div className="w-64 h-64 absolute left-0 top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[830px]"></div> */}
      {/* <div className="w-64 h-64 absolute right-0 top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[830px]"></div> */}

      <h2 className="w-full text-[#ffffff] font-semibold text-center text-3xl pb-4">
        Talk to us about{" "}
        <span className="text-[#1A9FFF] font-bold">your project</span>
      </h2>

      {/* Form section */}
      <form className="flex flex-col gap-6 z-20">
        {/* Full name input field */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="full-name"
            className="w-full text-lg text-[#ffffff] font-semibold z-20"
          >
            Full Name
          </label>
          <input
            id="full-name"
            type="text"
            className="z-20 focus:outline-none focus:ring focus:ring-violet-900 pl-4 py-3 bg-[#061a28] border-2 border-[#225c86] rounded-lg text-base text-[#eeeeee] font-normal"
          />
        </div>

        {/* Email input field */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="w-full text-lg text-[#ffffff] font-semibold "
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            className="focus:outline-none focus:ring focus:ring-violet-400 opacity-80 pl-4 py-3 bg-[#061a28] border-2 border-[#225c86] rounded-lg text-base text-[#eeeeee] font-normal"
          />
        </div>

        {/* About textarea */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="project-message"
            className="w-full text-lg text-[#ffffff] font-semibold "
          >
            About your project
          </label>
          <textarea
            id="project-message"
            rows={10}
            className="focus:outline-none focus:ring focus:ring-violet-400 pl-4 py-3 opacity-95 bg-[#061a28] border-2 border-[#225c86] rounded-lg text-base text-[#eeeeee] font-normal"
          />
        </div>

        {/* Submit form button */}
        <div className="w-full flex items-center justify-center">
          <button className="w-fit bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] flex gap-2 items-center justify-center font-normal lg:font-medium text-[#ffffff] text-lg md:text-xl z-20 rounded-full py-2 md:py-3 px-6 md:px-10">
            <LogoArrowRight fillColor="#ffffff" />
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
