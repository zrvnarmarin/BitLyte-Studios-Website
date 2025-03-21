"use client";

import Link from "next/link";
import React from "react";
import { LogoIcon, MenuButton } from "./Navbar";
import { ContactIcon, EmailIcon, socialMediaIcons } from "./Footer";

export default function NavigationMenuFullScreen({
  isSideBarOpen,
  toggleNavigation,
}: {
  isSideBarOpen: boolean;
  toggleNavigation: () => void;
}) {
  return (
    <>
      {isSideBarOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#000000] z-[9999] px-8 md:px-14 lg:px-24 xl:px-28 2xl:px-32 3xl:px-72 py-6 overflow-y-auto">
          <div className="flex items-center justify-between gap-2">
            <Link href={`/`} className="flex items-center gap-2 lg:gap-4">
              <LogoIcon />
              <span className="text-[#ffffff] text-lg sm:text-xl lg:text-2xl font-bold">
                BitLyte Studios
              </span>
            </Link>
            <button onClick={() => toggleNavigation()}>
              {isSideBarOpen ? <XButton /> : <MenuButton />} 
            </button>
          </div>

          <div className="flex flex-col">
            <NavbarLinksSection onCloseSidebar={toggleNavigation} />
            <ContactInfoSection />
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
    <li className="w-full">
      <Link
        href={`${navbarLink.link}`}
        onClick={() => onCloseSidebar()}
        className="w-full group flex items-center justify-start gap-4 text-5xl text-[#ffffff] font-semibold text-start"
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
    <ul className="lg:flex flex flex-col items-center justify-between gap-6 pt-16 py-2">
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

export const ContactInfoSection = () => {
  return (
    <div className="flex flex-col pt-6 gap-8">
      <div className="w-full flex items-center gap-8 pt-6">
        {socialMediaIcons.map((socialMediaIcon) => (
          <React.Fragment key={socialMediaIcon.id}>
            <Link href={socialMediaIcon.href}>{socialMediaIcon.icon()}</Link>
          </React.Fragment>
        ))}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <ContactIcon />
          <span className="text-base text-[#ffffff] font-normal">
            +385015896878
          </span>
        </div>
        <div className="flex items-center gap-2">
          <EmailIcon />
          <span className="text-base text-[#ffffff] font-normal">
            info@bitlyte-studios.com
          </span>
        </div>
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
    <svg
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 12L33 33" stroke="white" strokeWidth="2" />
      <path d="M33 12L12 33" stroke="white" strokeWidth="2" />
    </svg>
  );
};

export const navbarLinks = [
  {
    name: "Services",
    link: "/services",
  },
  // {
  //   name: "Projects",
  //   link: "/projects",
  // },
  {
    name: "About",
    link: "/about-us",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export type NavbarLink = {
  name: string;
  link: string;
};
