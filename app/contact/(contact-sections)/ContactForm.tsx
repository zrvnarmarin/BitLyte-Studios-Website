"use client";
import React from "react";
import "../../../public/test.css";
import { LogoForButtonRotated } from "@/app/services/[serviceId]/HeroSection";

export default function ContactForm() {
  return (
    <div className="flex z-30 flex-col gap-8 justify-start overflow-hidden relative p-8 md:px-10 sm:px-8 sm:py-10 md:py-14 lg:p-10 xl:p-12 rounded-lg border-[0.5px] border-[#0a2030] hover:shadow-[0_0_15px_0_rgba(10,32,78,1)]">
      {/* Blur effect background */}
      <div className="w-96 h-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[830px]"></div>

      {/* Form */}
      <form
        className="flex flex-col gap-6 z-20"
        method="POST"
        action="https://usebasin.com/f/ba68da363bf3"
      >
        {/* Full name input field */}
        <div className="flex flex-col gap-3">
          <label
            htmlFor="full-name"
            className="w-full flex items-center gap-2 text-[#ffffff] font-medium text-xl text-start z-20"
          >
            <UserIcon />
            Full Name
          </label>
          <input
            id="full-name"
            type="text"
            name="full-name"
            placeholder="Enter your full name"
            className="z-20 focus:outline-none focus:ring focus:ring-violet-900 pl-4 py-3 bg-[#061a28]/50 border-2 border-[#225c86] rounded-lg text-base text-[#eeeeee] font-normal"
          />
        </div>

        {/* Email input field */}
        <div className="flex flex-col gap-3">
          <label
            htmlFor="email"
            className="w-full flex items-center gap-2 text-[#ffffff] font-medium text-xl text-start z-20"
          >
            <MailIcon />
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="focus:outline-none focus:ring focus:ring-violet-400 opacity-80 pl-4 py-3 bg-[#061a28]/50 border-2 border-[#225c86] rounded-lg text-base text-[#eeeeee] font-normal"
          />
        </div>

        {/* About project textarea field */}
        <div className="flex flex-col gap-3">
          <label
            htmlFor="project-message"
            className="w-full flex items-center gap-2 text-[#ffffff] font-medium text-xl text-start z-20 capitalize"
          >
            <MessageSquareIcon />
            About your project
          </label>
          <textarea
            id="project-message"
            name="project-message"
            placeholder="Tell us about your project, goals and timeline.."
            rows={5}
            className="focus:outline-none focus:ring focus:ring-violet-400 px-4 py-3 opacity-95 bg-[#061a28]/50 border-2 border-[#225c86] rounded-lg text-base text-[#eeeeee] font-normal"
          />
        </div>

        {/* Submit form button */}
        <div className="relative w-full flex justify-center pt-4 md:pt-8 z-30">
          <button
            type="submit"
            className="relative overflow-hidden w-fit flex items-center gap-2 py-4 px-12 text-[#000000] bg-[#ffffff] rounded-full font-normal text-2xl xs:text-2xl sm:text-2xl md:text-2xl shadow-[0_0_10px_0_rgba(255,255,255,1)] hover:shadow-[0_0_20px_0_rgba(255,255,255,1)] duration-300"
          >
            <LogoForButtonRotated fillColor="#000000" width={18} height={20} />
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export const MailIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1A9FFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
};

export const UserIcon = () => {
  return (
    // <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-[#1A9FFF]">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1A9FFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-user text-white"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
    // </div>
  );
};

export const MessageSquareIcon = () => {
  return (
    // <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-[#1A9FFF]">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1A9FFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-message-square text-white"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
    // </div>
  );
};
