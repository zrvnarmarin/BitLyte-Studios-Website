"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";

export default function Sidebar({
  isSideBarOpen,
  onCloseSidebar,
}: {
  isSideBarOpen: boolean;
  onCloseSidebar: () => void;
}) {
  useEffect(() => {
    if (isSideBarOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isSideBarOpen]);

  return (
    <>
      {isSideBarOpen && (
        <div className="top-0 left-0 bottom-0 bg-[#000000] w-full h-screen sticky z-40">
          <div className="flex justify-between items-center py-2 px-4">
            <LogoImage onCloseSidebar={onCloseSidebar} />
            <button onClick={() => onCloseSidebar()} className="bg-white text-xl text-black">
              Open/close
            </button>
          </div>
          <div className="flex flex-col">
            <NavbarLinksSection onCloseSidebar={onCloseSidebar} />
            <GetInTouchWithUsSection />
          </div>
        </div>
      )}
    </>
  );
}

const NavbarLink = ({
  navbarLink,
  onCloseSidebar,
}: {
  navbarLink: NavbarLink;
  onCloseSidebar: () => void;
}) => {
  return (
    <li className="text-[#F3F4F6] xs:text-md lg:text-lg xl:text-xl font-normal tracking-wider hover:underline hover:underline-offset-8 hover:decoration-[#1D7349] leading-7">
      <Link
        href={`${navbarLink.link}`}
        onClick={() => onCloseSidebar()}
        className=" font-normal text-white text-lg tracking-wider"
      >
        {navbarLink.name}
      </Link>
    </li>
  );
};

const NavbarLinksSection = ({
  onCloseSidebar,
}: {
  onCloseSidebar: () => void;
}) => {
  return (
    <ul className="lg:flex flex flex-col items-end justify-between gap-6 pt-16 py-2 px-4">
      {navbarLinks.map((link) => (
        <NavbarLink
          key={link.name}
          navbarLink={link}
          onCloseSidebar={onCloseSidebar}
        />
      ))}
    </ul>
  );
};

export const GetInTouchWithUsSection = () => {
  return (
    <div className="bg-[#111317] mt-16 flex flex-col gap-8 items-end py-2 px-4 w-full">
      <div className="flex flex-col gap-2">
        <p className="font-normal text-white uppercase text-end text-lg tracking-wider">
          Get In Touch With Us
        </p>
        <Link
          href="/"
          className="text-[#F3F4F6] xs:text-md lg:text-lg xl:text-xl font-normal tracking-wider hover:underline hover:underline-offset-8 hover:decoration-[#1D7349] leading-7"
        >
          bitlytestudios.com
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-normal text-white uppercase text-end text-lg tracking-wider">
          Follow Us
        </p>
      </div>
    </div>
  );
};

export const LogoImage = ({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <Link href={"/"}>
      <svg
        width="35"
        height="42"
        viewBox="0 0 35 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.213 0.000488281L34.7533 0.000488281L24.1045 18.4857C22.5133 15.6612 21.6864 12.4705 21.7055 9.22871C21.7245 5.98691 22.5888 2.80613 24.213 0.000488281ZM34.8092 41.9987L10.5403 0.00223828L0 0.00223828L12.1083 21.0285L0 42.0005H10.5403L17.4038 30.1635L24.2148 42.0005L34.8092 41.9987Z"
          fill="#24D17C"
        />
      </svg>
    </Link>
  );
};

export const XButton = () => {
  return (
    <button>
      Open/Close
    </button>
  );
};

const navbarLinks = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Services",
    link: "/about/testimonials",
  }
];

export type NavbarLink = {
  name: string;
  link: string;
};
