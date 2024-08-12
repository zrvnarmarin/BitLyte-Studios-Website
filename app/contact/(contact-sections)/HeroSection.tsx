import React from "react";
import "../../../public/test.css";
import HeroSectionWrapper from "../../components/HeroSectionWrapper";
import Link from "next/link";
import { LogoForButton } from "@/app/services/[serviceId]/HeroSection";
import { webDevelopmentServices } from "./ContactForm";
import Image from "next/image";
import ArrowRight from "../../../public/images/Rectangle 1.svg";

export default function HeroSection() {
  return (
    <HeroSectionWrapper>
      <div>
        <h1 className="text-8xl text-[#ffffff] font-medium text-center z-30 pt-16">
          Let`s build
          <span className="custom-text font-black"> together </span>
        </h1>
      <div className="w-96 h-96 absolute right-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] z-10 blur-[330px]"></div>

      </div>

        {/* Next component */}
      <div className="grid grid-cols-2 gap-8 pt-12">

        {/* Adress, email and qoute text */}
        <div>
          <p className="text-2xl text-start font-semibold text-[#ffffff] z-20">
              BitLyte Studios is here to make your dream project come to life. We want to make
              a positive difference for your business or your life and accelerate it together
              with you and leave a better mark in the world.
          </p>
          <p className="w-full text-2xl text-start font-light text-[#ffffff] z-20">
          Get in touch with us and
          </p>

          <p className="w-full text-2xl text-start font-light text-[#ffffff] z-20">
            Let us help you thrive in this digital realm of possibilities!
          </p>
          
        </div>

        {/* Form */}
        <div className="flex flex-col gap-8">
          <h2 className="w-full text-3xl text-[#ffffff]">
            Talk to us about{" "}
            <span className="text-[#1A9FFF]">your project</span>
          </h2>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="full-name"
                className="w-full text-lg text-[#ffffff] font-semibold "
              >
                Full Name
              </label>
              <input
                id="full-name"
                type="text"
                className="focus:outline-none focus:ring focus:ring-violet-900 pl-4 py-3 bg-gradient-to-r from-[#292929] to-[#00111d] border border-[#225c86] rounded-lg text-base text-[#eeeeee] font-normal"
              />
            </div>
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
                className="focus:outline-none focus:ring focus:ring-violet-400 pl-4 py-3 bg-gradient-to-r from-[#292929] to-[#00111d] border border-[#225c86] rounded-lg text-base text-[#eeeeee] font-normal"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="project-message"
                className="w-full text-lg text-[#ffffff] font-semibold "
              >
                Services you are interested in
              </label>
              <select className="focus:outline-none focus:ring focus:ring-violet-400 px-4 py-3 bg-gradient-to-r from-[#292929] to-[#00111d] border border-[#225c86] rounded-lg text-base text-[#eeeeee] font-normal">
                <option
                  className="bg-[#292929] text-[#eeeeee]"
                  disabled
                  selected
                >
                  Select a service
                </option>
                {webDevelopmentServices.map((service) => (
                  <option
                    key={service.id}
                    className="bg-[#292929] text-[#eeeeee] hover:bg-[#333333]"
                    value={service.id}
                  >
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="project-message"
                className="w-full text-lg text-[#ffffff] font-semibold "
              >
                About your project
              </label>
              <textarea
                id="project-message"
                rows={6}
                className="focus:outline-none focus:ring focus:ring-violet-400 pl-4 py-3 bg-gradient-to-r from-[#292929] to-[#00111d] border border-[#225c86] rounded-lg text-base text-[#eeeeee] font-normal"
              />
            </div>
            <div className="w-full flex justify-center pt-2">
              <button className="w-full flex items-center justify-center gap-2 py-2 px-6 text-[#ffffff] bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] rounded-full text-xl">
                <Image src={ArrowRight} alt="hero_image" />
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Blur background */}
      {/* <div className="w-96 h-96 absolute right-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] z-10 blur-[930px]"></div> */}
    </HeroSectionWrapper>
  );
}
