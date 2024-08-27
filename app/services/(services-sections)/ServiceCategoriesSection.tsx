import React from "react";
import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "../../components/SectionWrapper";

// Service Icons
import LandingPageIcon from "../../../public/icons/BitLyte_Studios_ikona_Landing_Page_Design_64x64px.svg";
import WebsiteDevelopmentIcon from "../../../public/icons/BitLyte_Studios_ikona_Website_Design_64x64px.svg";
import FrontendDevelopmentIcon from "../../../public/icons/BitLyte_Studios_ikona_Web_Development_64x64px.svg";
import CopywritingIcon from "../../../public/icons/BitLyte_Studios_ikona_Copywriting_64x64px.svg";
import SocialMediaManagementIcon from "../../../public/icons/BitLyte_Studios_ikona_Social_Media_Assets_64x64px.svg";
import MetaHiringCampaignsIcon from "../../../public/icons/BitLyte_Studios_ikona_Ad_Campaigns_64x64px.svg";
import UiuxDesignIcon from "../../../public/icons/BitLyte_Studios_ikona_UI_UX_Design_64x64px.svg";
import BrandIdentityIcon from "../../../public/BitLyte_Studios_ikona_Brand_Identity_64x64px.svg";
import LogoDesignIcon from "../../../public/icons/BitLyte_Studios_ikona_Logo_Design_64x64px.svg";

import "../../../public/test.css";

export default function ServiceCategoriesSection() {
  return (
    <SectionWrapper>
      {serviceCategories.map((serviceCategory) => (
        <React.Fragment key={serviceCategory.id}>
          <h2 className="w-full text-3xl xs:text-4xl sm:text-5xl text-[#ffffff] font-medium xs:font-normal">
            {serviceCategory.serviceCategoryTitle}
          </h2>
          <div
            key={serviceCategory.serviceCategoryTitle}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-4 sm:py-8 md:py-12"
          >
            {serviceCategory.services.map((service) => (
              <Link
                href={`/services/${service.categoryTitle
                  .trim()
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                key={service.id}
                className="overflow-hidden relative flex flex-col items-center justify-center gap-4 rounded-lg p-4 py-8 border-[0.5px] border-[#252525] min-h-[350px]"
              >
                {/* Blur background */}
                <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-[#0b0b0b] to-[#3B4EB5] z-10 blur-[330px]"></div>
                {/* Service Card */}
                <div className="flex flex-col items-center justify-center gap-4 z-20 text-center">
                  <Image
                    height={180}
                    width={180}
                    alt="img"
                    src={service.imageSrc}
                  />
                  <h3 className="text-[#ffffff] font-semibold text-2xl xs:text-3xl">
                    {service.categoryTitle}
                  </h3>
                  <p className="text-lg xs:text-xl font-light text-[#ffffff] pt-4">
                    {service.categoryDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </React.Fragment>
      ))}
    </SectionWrapper>
  );
}

export const serviceCategories = [
  {
    id: 1,
    serviceCategoryTitle: "Web development",
    services: [
      {
        id: 1,
        imageSrc: LandingPageIcon,
        categoryTitle: "Landing Page",
        categoryDescription:
          "Building high-quality and responsive web landing pages that drive high-converting leads to your business.",
      },
      {
        id: 2,
        imageSrc: WebsiteDevelopmentIcon,
        categoryTitle: "Website Development",
        categoryDescription:
          "Scaling your business with a beautiful multi-page website that serves as a market for your products.",
      },
      {
        id: 3,
        imageSrc: FrontendDevelopmentIcon,
        categoryTitle: "Frontend Development",
        categoryDescription:
          "Building performant, functional, and beautiful user interfaces that connect to your backend.",
      },
    ],
  },
  {
    id: 2,
    serviceCategoryTitle: "Digital Marketing",
    services: [
      {
        id: 1,
        imageSrc: CopywritingIcon,
        categoryTitle: "Copywriting",
        categoryDescription:
          "Creating engrossing stories that your audience finds relatable, encouraging interaction and conversions.",
      },
      {
        id: 2,
        imageSrc: SocialMediaManagementIcon,
        categoryTitle: "Social Media Management",
        categoryDescription:
          "Ignite your online presence and build community and brand loyalty with well-managed social media initiatives.",
      },
      {
        id: 3,
        imageSrc: MetaHiringCampaignsIcon,
        categoryTitle: "Meta Hiring Campaigns",
        categoryDescription:
          "Reach the right audience at the right time to maximize ROI through tailored advertising campaigns.",
      },
    ],
  },
  {
    id: 3,
    serviceCategoryTitle: "Design",
    services: [
      {
        id: 1,
        imageSrc: UiuxDesignIcon,
        categoryTitle: "UI/UX Design",
        categoryDescription:
          "Create intuitive interfaces that facilitate smooth user experiences, increasing user engagement and satisfaction.",
      },
      {
        id: 2,
        imageSrc: BrandIdentityIcon,
        categoryTitle: "Brand Identity",
        categoryDescription:
          "Create a unique brand identity that appeals to your target market and makes you stand out.",
      },
      {
        id: 3,
        imageSrc: LogoDesignIcon,
        categoryTitle: "Logo Design",
        categoryDescription:
          "Create a distinctive and memorable logo that embodies your brand identity and makes a lasting first impression.",
      },
    ],
  },
];
