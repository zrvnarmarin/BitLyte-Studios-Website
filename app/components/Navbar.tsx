"use client";

import React, { useState } from "react";
import Link from "next/link";
import { UseScrollPosition } from "../utils/hooks/UseScrollPosition";

export default function Navbar({
    onOpenSidebar,
  }: {
    isSideBarOpen: boolean;
    onOpenSidebar: () => void;
  }) {
   
  const scrollPosition = UseScrollPosition();

  return (
    
      <nav className={`w-full fixed z-30 opacity-95 bg-[#0b0b0b] ${scrollPosition > 20 ? "opacity-90   backdrop-blur-xl duration-700" : ""} } flex flex-row justify-between items-center lg:bg-inherit px-8 md:px-14 lg:px-24 xl:px-28 2xl:px-32 3xl:px-72 py-6`}>
        <div className="flex items-center gap-2">
          <LogoIcon />
          <span className="text-[#ffffff] text-lg font-bold">
            BitLyte Studios
          </span>
        </div>
        <ul className="relative hidden lg:flex items-center justify-between gap-10">
          {navbarLinks.map((navbarLink) => (
            <>
              {navbarLink.dropdown === true ? (
                <DropdownLink
                  name={navbarLink.name}
                  dropdownItems={navbarLink.dropdownItems}
                />
              ) : (
                <NavbarLink key={navbarLink.name} navbarLink={navbarLink} />
              )}
            </>
          ))}
        </ul>
        <div
          onClick={() => onOpenSidebar()}
          className="text-3xl text-red-300 z-40"
        >
          <MenuButton />
        </div>
      </nav>
  );
}

const NavbarLink = ({ navbarLink }: { navbarLink: NavbarLink }) => {
  return (
    <li className="normal-case text-base text-white font-normal">
      <Link href={`${navbarLink.link}`}>{navbarLink.name}</Link>
    </li>
  );
};

export type NavbarLink = {
  name: string;
  link: string;
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

const navbarLinks = [
  {
    name: "Programs",
    link: "/programs",
    dropdown: false,
  },
  {
    name: "Services",
    link: "/services",
    dropdown: false,
  },
  {
    name: "Facilities",
    link: "/facilities",
    dropdown: false,
  },
  {
    name: "About",
    link: "/about",
    dropdown: true,
    dropdownItems: [
      {
        name: "Instructors",
        link: "/instructors",
      },
      {
        name: "Testimonials",
        link: "/testimonials",
      },
    ],
  },
];

export function DropdownLink({
  name,
  dropdownItems,
}: {
  name: string;
  dropdownItems: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="flex items-center gap-1.5"
    >
      <a className="normal-case text-base text-white font-normal" href="#0">
        {name}
      </a>
      <button
        className="flex items-center"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <svg
          className="w-3 h-3 fill-white"
          xmlns="http://www.w3.org/2000/svg"
          width="4"
          height="4"
        >
          <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
        </svg>
      </button>
      {/* 2nd level menu */}
      <ul
        className={`origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929] p-2 rounded-lg shadow-xl ${!open && "hidden"}`}
      >
        {dropdownItems.map((item, index) => (
          <DropdownLinkElement key={index} name={item.name} link={item.link} />
        ))}
      </ul>
    </div>
  );
}

export const DropdownLinkElement = ({
  name,
  link,
}: {
  name: string;
  link: string;
}) => {
  return (
    <li>
      <Link
        className="text-slate-800 hover:bg-gradient-to-r from-[#1D7349] to-[#31C57D] flex items-center p-2 rounded-md"
        href={link}
      >
        <div className="flex items-center justify-center bg-[#31C57D] shadow-sm h-7 w-7 shrink-0 mr-3 p-1 rounded-md">
          <TestIconTwo iconFill="#ffffff" />
        </div>
        <span className="whitespace-nowrap normal-case text-md text-white leading-2 font-normal">
          {name}
        </span>
      </Link>
    </li>
  );
};

export const TestIconTwo = ({
    width = "2.5em",
    height = "2.5em",
    iconFill,
  }: {
    width?: string;
    height?: string;
    iconFill: string;
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 50 50"
      >
        <path
          fill={iconFill}
          d="M17.962 44.874a1.007 1.007 0 0 1-.05 1.416l-2.172 2.031a.999.999 0 0 1-1.411-.051L1.68 34.638a1.007 1.007 0 0 1 .051-1.416l2.175-2.028a.998.998 0 0 1 1.411.051zm16.14-25.65a1.007 1.007 0 0 1-.051 1.416l-13.67 12.77a.999.999 0 0 1-1.411-.051l-3.263-3.521a1.007 1.007 0 0 1 .051-1.416l13.667-12.77a.997.997 0 0 1 1.41.051zM22.613 40.527c.374.403.351 1.04-.051 1.416l-2.175 2.03a.998.998 0 0 1-1.411-.051L6.334 30.29a1.007 1.007 0 0 1 .05-1.416l2.171-2.029a.999.999 0 0 1 1.411.051zm21.063-20.814a1.007 1.007 0 0 1-.052 1.416l-2.174 2.03a1 1 0 0 1-1.412-.05L27.394 9.48a1.006 1.006 0 0 1 .05-1.416l2.18-2.035a.997.997 0 0 1 1.41.051zm4.644-4.34a1.009 1.009 0 0 1-.051 1.417l-2.17 2.029a.997.997 0 0 1-1.41-.05L32.047 5.134a1.009 1.009 0 0 1 .05-1.417l2.172-2.033a.995.995 0 0 1 1.409.05z"
        ></path>
      </svg>
    );
  };

  export const LogoIcon = () => {
    return (
        <svg width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.3278 4.85669H18.4829L0 22.4283L11.4937 39.9998H16.4909L23.3278 4.85669Z" fill="#3D3D3D"/>
            <path d="M20.783 35.1431H25.6279L44.1108 17.5716L32.6171 4.36873e-07L27.6199 0L20.783 35.1431Z" fill="#3D3D3D"/>
        </svg>
    )
  }

  export const MenuButton = () => {
    return (
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22.5" cy="22.5" r="20.5" fill="#1A9FFF" stroke="#1A9FFF" stroke-width="4"/>
            <path d="M10.3846 26.3076H31.1539" stroke="white" stroke-width="4"/>
            <path d="M13.7692 19.3845H34.5385" stroke="white" stroke-width="4"/>
        </svg>
    )
  }