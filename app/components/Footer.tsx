import React from "react";
import { LogoIcon, LogoIconWhite } from "./Navbar";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full mt-20 md:mt-24 pt-16 pb-6 px-8 md:px-14 lg:px-24 xl:px-28 2xl:px-32 3xl:px-72 border-t-[0.] border-[#0a2030] overflow-hidden">

      {/* Background gradients */}
      <div className="w-48 h-48 absolute bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#1A9FFF] z-10 blur-[230px]"></div>
      <div className="w-48 h-48 absolute right-32 bg-gradient-to-r from-[#1A9FFF] to-[#1A9FFF] z-10 blur-[230px]"></div>

      <div className="relative z-10 w-full flex flex-col items-start gap-2">
        {/* Logo */}
        <Link
          href={`/`}
          className="w-full flex items-center justify-start lg:justify-center"
        >
          <div className="flex items-center gap-2 lg:gap-4">
            <LogoIcon />
            <span className="text-[#ffffff] text-lg sm:text-xl lg:text-2xl font-bold">
              BitLyte Studios
            </span>
          </div>
        </Link>

        <div className="w-full flex flex-col lg:flex-row items-center pt-4">
          {/* Contact info */}
          <div className="w-full flex flex-col pt-12 lg:pt-24 gap-2 order-3 lg:order-1">
            <p className="text-base md:text-xl text-[#ffffff] font-normal md:font-bold uppercase pb-2">
              Contact info
            </p>
            <div className="flex items-center gap-2">
              <ContactIcon />
              <span className="text-sm md:text-lg text-[#ffffff] font-normal md:font-light">
                +385015896878
              </span>
            </div>
            <div className="flex items-center gap-2">
              <EmailIcon />
              <span className="text-sm md:text-lg text-[#ffffff] font-normal md:font-light">
                bitlyte-studios@gmail.om
              </span>
            </div>
          </div>

          <div className="flex flex-col flex-wrap items-start justify-between w-full order-1 lg:order-2">
            {/* Quick links */}
            <div className="w-full flex flex-col pt-4 gap-6">
              <p className="lg:hidden text-base md:text-xl text-[#ffffff] font-normal md:font-bold uppercase">
                Browse
              </p>
              <div className="grid grid-cols-2 sm:flex lg:flex-row justify-start lg:justify-center sm:w-full gap-5">
                {quickLinkRoutes.map((routeLink) => (
                  <React.Fragment key={routeLink.id}>
                    <Link href={routeLink.href}>
                      <p className="text-sm md:text-lg text-[#ffffff] hover:text-[#1a9fff] font-light md:font-light">
                        {routeLink.title}
                      </p>
                    </Link>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Social media links */}
            <div className="w-full flex flex-col pt-12 lg:pt-8 gap-4">
              <p className="text-base md:text-xl text-[#ffffff] font-normal md:font-bold uppercase lg:text-center">
                Folow Us On
              </p>
              <div className="w-full flex lg:items-center lg:justify-center gap-8">
                {socialMediaIcons.map((socialMediaIcon) => (
                  <React.Fragment key={socialMediaIcon.id}>
                    <Link href={socialMediaIcon.href}>
                      {socialMediaIcon.icon()}
                    </Link>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Company info */}
          <div className="w-full flex flex-col items-start lg:items-end pt-12 lg:pt-24 gap-2 order-2 lg:order-3">
            <p className="text-base md:text-xl text-[#ffffff] font-normal md:font-bold uppercase pb-2">
              Company info
            </p>
            <div className="flex items-center gap-2">
              <AddressIcon />
              <span className="text-sm md:text-base text-[#ffffff] font-normal md:font-light text-left">
                Assington, Sudbury, UK
              </span>
            </div>
            <div className="flex items-center gap-2">
              <EmailIcon />
              <span className="text-sm md:text-base text-[#ffffff] font-normal md:font-light text-left">
                Assington, Sudbury
              </span>
            </div>
          </div>
        </div>

        {/* Copyright and author */}
        <div className="w-full flex flex-col items-start lg:items-center justify-between pb-0 lg:pb-2 pt-12">
          <div className="flex flex-col items-start lg:items-center justify-center gap-2">
            <p className="text-xs text-[#dddddd] font-light">
              ©2024 BitLyte Studios. All rights reserved.
            </p>
            <p className="text-xs text-[#dddddd] font-light">
              Developed by Marin Zrvnar
            </p>
          </div>
          
        </div>

        {/* Terms and privacy */}
        <div className="w-full flex flex-col items-start lg:items-center justify-between pt-2 lg:pt-4 border-t-[0.5px] border-[#0a2030]">
          <div className="flex items-center justify-start gap-2 ">
            <p className="text-xs text-[#dddddd] font-light">
              Terms And Conditions
            </p>
            <span className="text-xs text-[#dddddd] font-light">|</span>
            <p className="text-xs text-[#dddddd] font-light">Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const SVGBackground = () => {
  return (
    <svg
      className="w-full h-full"
      preserveAspectRatio="none"
      viewBox="0 0 1440 560"
    >
      <g mask="url(#SvgjsMask1463)" fill="none">
        <rect
          width="1440"
          height="560"
          x="0"
          y="0"
          fill="url(#SvgjsLinearGradient1464)"
        ></rect>
        <path
          d="M 0,362 C 144,323 432,178.8 720,167 C 1008,155.2 1296,275.8 1440,303L1440 560L0 560z"
          fill="rgba(0, 62, 106, 1)"
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1463">
          <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
          id="SvgjsLinearGradient1464"
        >
          <stop stopColor="#0e2a47" offset="0"></stop>
          <stop stopColor="rgba(41, 41, 41, 1)" offset="1"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export const XIcon = () => {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 19 20"
      fill="#ffffff"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.307 8.54539L18.3798 0.500244H16.7034L10.5638 7.48546L5.65767 0.500244H0L7.41784 11.0642L0 19.5002H1.67635L8.16102 12.1228L13.3423 19.5002H19L11.307 8.54539ZM9.01176 11.1565L8.2602 10.1047L2.27983 1.73524H4.85442L9.67951 8.48974L10.4311 9.54153L16.7048 18.3222H14.1302L9.01176 11.1565Z"
        fill="#ffffff"
      />
    </svg>
  );
};

export const InstagramIcon = () => {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0286 0C12.1536 0.003 12.7246 0.009 13.2176 0.023L13.4116 0.03C13.6356 0.038 13.8566 0.0479999 14.1236 0.0599999C15.1876 0.11 15.9136 0.278 16.5506 0.525C17.2106 0.779 17.7666 1.123 18.3226 1.678C18.8311 2.1779 19.2245 2.78259 19.4756 3.45C19.7226 4.087 19.8906 4.813 19.9406 5.878C19.9526 6.144 19.9626 6.365 19.9706 6.59L19.9766 6.784C19.9916 7.276 19.9976 7.847 19.9996 8.972L20.0006 9.718V11.028C20.003 11.7574 19.9954 12.4868 19.9776 13.216L19.9716 13.41C19.9636 13.635 19.9536 13.856 19.9416 14.122C19.8916 15.187 19.7216 15.912 19.4756 16.55C19.2253 17.2178 18.8317 17.8226 18.3226 18.322C17.8225 18.8303 17.2179 19.2238 16.5506 19.475C15.9136 19.722 15.1876 19.89 14.1236 19.94C13.8863 19.9512 13.649 19.9612 13.4116 19.97L13.2176 19.976C12.7246 19.99 12.1536 19.997 11.0286 19.999L10.2826 20H8.97358C8.24384 20.0025 7.5141 19.9949 6.78458 19.977L6.59058 19.971C6.35319 19.962 6.11585 19.9517 5.87858 19.94C4.81458 19.89 4.08858 19.722 3.45058 19.475C2.78325 19.2244 2.17879 18.8308 1.67958 18.322C1.17062 17.8223 0.776801 17.2176 0.525577 16.55C0.278577 15.913 0.110577 15.187 0.0605769 14.122C0.0494358 13.8847 0.0394357 13.6474 0.030577 13.41L0.0255771 13.216C0.00714914 12.4868 -0.00118508 11.7574 0.000577001 11.028V8.972C-0.00221397 8.2426 0.00512015 7.5132 0.0225771 6.784L0.029577 6.59C0.037577 6.365 0.047577 6.144 0.059577 5.878C0.109577 4.813 0.277577 4.088 0.524577 3.45C0.775691 2.7819 1.1703 2.17702 1.68058 1.678C2.17967 1.16947 2.78372 0.775987 3.45058 0.525C4.08858 0.278 4.81358 0.11 5.87858 0.0599999C6.14458 0.0479999 6.36658 0.038 6.59058 0.03L6.78458 0.0239999C7.51377 0.00623271 8.24317 -0.0014347 8.97258 0.000999928L11.0286 0ZM10.0006 5C8.67449 5 7.40273 5.52678 6.46504 6.46447C5.52736 7.40215 5.00058 8.67392 5.00058 10C5.00058 11.3261 5.52736 12.5979 6.46504 13.5355C7.40273 14.4732 8.67449 15 10.0006 15C11.3267 15 12.5984 14.4732 13.5361 13.5355C14.4738 12.5979 15.0006 11.3261 15.0006 10C15.0006 8.67392 14.4738 7.40215 13.5361 6.46447C12.5984 5.52678 11.3267 5 10.0006 5ZM10.0006 7C10.3945 6.99993 10.7847 7.07747 11.1487 7.22817C11.5127 7.37887 11.8434 7.5998 12.122 7.87833C12.4007 8.15686 12.6217 8.48754 12.7725 8.85149C12.9233 9.21544 13.001 9.60553 13.0011 9.9995C13.0011 10.3935 12.9236 10.7836 12.7729 11.1476C12.6222 11.5116 12.4013 11.8423 12.1228 12.121C11.8442 12.3996 11.5135 12.6206 11.1496 12.7714C10.7856 12.9223 10.3955 12.9999 10.0016 13C9.20593 13 8.44287 12.6839 7.88026 12.1213C7.31765 11.5587 7.00158 10.7956 7.00158 10C7.00158 9.20435 7.31765 8.44129 7.88026 7.87868C8.44287 7.31607 9.20593 7 10.0016 7M15.2516 3.5C14.9201 3.5 14.6021 3.6317 14.3677 3.86612C14.1333 4.10054 14.0016 4.41848 14.0016 4.75C14.0016 5.08152 14.1333 5.39946 14.3677 5.63388C14.6021 5.8683 14.9201 6 15.2516 6C15.5831 6 15.901 5.8683 16.1355 5.63388C16.3699 5.39946 16.5016 5.08152 16.5016 4.75C16.5016 4.41848 16.3699 4.10054 16.1355 3.86612C15.901 3.6317 15.5831 3.5 15.2516 3.5Z"
        fill="#ffffff"
      />
    </svg>
  );
};

export const LinkedinIcon = () => {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.8899 0.500244C17.4498 0.500244 17.9868 0.722664 18.3827 1.11857C18.7786 1.51448 19.001 2.05145 19.001 2.61136V17.3891C19.001 17.949 18.7786 18.486 18.3827 18.8819C17.9868 19.2778 17.4498 19.5002 16.8899 19.5002H2.11215C1.55225 19.5002 1.01528 19.2778 0.619368 18.8819C0.223458 18.486 0.0010376 17.949 0.0010376 17.3891V2.61136C0.0010376 2.05145 0.223458 1.51448 0.619368 1.11857C1.01528 0.722664 1.55225 0.500244 2.11215 0.500244H16.8899ZM16.3621 16.8614V11.2669C16.3621 10.3543 15.9996 9.47901 15.3543 8.83368C14.7089 8.18834 13.8337 7.8258 12.921 7.8258C12.0238 7.8258 10.9788 8.37469 10.4721 9.19802V8.02636H7.52715V16.8614H10.4721V11.6575C10.4721 10.8447 11.1266 10.1797 11.9394 10.1797C12.3313 10.1797 12.7072 10.3354 12.9843 10.6125C13.2615 10.8897 13.4171 11.2655 13.4171 11.6575V16.8614H16.3621ZM4.09659 6.36913C4.56691 6.36913 5.01797 6.1823 5.35053 5.84974C5.68309 5.51717 5.86993 5.06612 5.86993 4.5958C5.86993 3.61413 5.07826 2.81191 4.09659 2.81191C3.62348 2.81191 3.16974 2.99986 2.83519 3.3344C2.50065 3.66894 2.3127 4.12268 2.3127 4.5958C2.3127 5.57747 3.11493 6.36913 4.09659 6.36913ZM5.56382 16.8614V8.02636H2.63993V16.8614H5.56382Z"
        fill="#ffffff"
      />
    </svg>
  );
};

export const ContactIcon = ({
  width = 27,
  height = 27,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="#ffffff"
      stroke="currentColor"
      strokeWidth="0.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
    </svg>
  );
};

export const EmailIcon = ({
  width = 27,
  height = 27,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill="#ffffff"
      viewBox="0 0 100.354 100.354"
      id="Layer_1"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M93.09,76.224c0.047-0.145,0.079-0.298,0.079-0.459V22.638c0-0.162-0.032-0.316-0.08-0.462 c-0.007-0.02-0.011-0.04-0.019-0.06c-0.064-0.171-0.158-0.325-0.276-0.46c-0.008-0.009-0.009-0.02-0.017-0.029 c-0.005-0.005-0.011-0.007-0.016-0.012c-0.126-0.134-0.275-0.242-0.442-0.323c-0.013-0.006-0.023-0.014-0.036-0.02 c-0.158-0.071-0.33-0.111-0.511-0.123c-0.018-0.001-0.035-0.005-0.053-0.005c-0.017-0.001-0.032-0.005-0.049-0.005H8.465 c-0.017,0-0.033,0.004-0.05,0.005c-0.016,0.001-0.032,0.004-0.048,0.005c-0.183,0.012-0.358,0.053-0.518,0.125 c-0.01,0.004-0.018,0.011-0.028,0.015c-0.17,0.081-0.321,0.191-0.448,0.327c-0.005,0.005-0.011,0.006-0.016,0.011 c-0.008,0.008-0.009,0.019-0.017,0.028c-0.118,0.135-0.213,0.29-0.277,0.461c-0.008,0.02-0.012,0.04-0.019,0.061 c-0.048,0.146-0.08,0.3-0.08,0.462v53.128c0,0.164,0.033,0.32,0.082,0.468c0.007,0.02,0.011,0.039,0.018,0.059 c0.065,0.172,0.161,0.327,0.28,0.462c0.007,0.008,0.009,0.018,0.016,0.026c0.006,0.007,0.014,0.011,0.021,0.018 c0.049,0.051,0.103,0.096,0.159,0.14c0.025,0.019,0.047,0.042,0.073,0.06c0.066,0.046,0.137,0.083,0.21,0.117 c0.018,0.008,0.034,0.021,0.052,0.028c0.181,0.077,0.38,0.121,0.589,0.121h83.204c0.209,0,0.408-0.043,0.589-0.121 c0.028-0.012,0.054-0.03,0.081-0.044c0.062-0.031,0.124-0.063,0.181-0.102c0.03-0.021,0.057-0.048,0.086-0.071 c0.051-0.041,0.101-0.082,0.145-0.129c0.008-0.008,0.017-0.014,0.025-0.022c0.008-0.009,0.01-0.021,0.018-0.03 c0.117-0.134,0.211-0.288,0.275-0.458C93.078,76.267,93.083,76.246,93.09,76.224z M9.965,26.04l25.247,23.061L9.965,72.346V26.04z M61.711,47.971c-0.104,0.068-0.214,0.125-0.301,0.221c-0.033,0.036-0.044,0.083-0.073,0.121l-11.27,10.294L12.331,24.138h75.472 L61.711,47.971z M37.436,51.132l11.619,10.613c0.287,0.262,0.649,0.393,1.012,0.393s0.725-0.131,1.011-0.393l11.475-10.481 l25.243,23.002H12.309L37.436,51.132z M64.778,49.232L90.169,26.04v46.33L64.778,49.232z"></path>
      </g>
    </svg>
  );
};

export const socialMediaIcons = [
  {
    id: 1,
    icon: XIcon,
    href: "https://www.x.com",
  },
  {
    id: 2,
    icon: InstagramIcon,
    href: "https://www.instagram.com",
  },
  {
    id: 3,
    icon: LinkedinIcon,
    href: "https://www.linkedin.com",
  },
];

export const quickLinkRoutes = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "/about-us",
  },
  {
    id: 3,
    title: "Services",
    href: "/services",
  },
  {
    id: 4,
    title: "Projects",
    href: "/projects",
  },
  {
    id: 5,
    title: "Contact",
    href: "/contact",
  },
];

export const secondaryLinks = [
  {
    id: 1,
    title: "Terms And Conditions",
    href: "/terms-and-conditions",
  },
  {
    id: 2,
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
];

export const AddressIcon = ({
  width = 27,
  height = 27,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1024 1024"
      fill="#ffffff"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z"
          fill=""
        ></path>
      </g>
    </svg>
  );
};
