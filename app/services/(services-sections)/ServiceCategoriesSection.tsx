import React from "react";
import SectionWrapper from "../../components/SectionWrapper";
import ServiceCategoryTestIcon from "../../../public/images/services/ServiceCategoryTest.svg";
import "../../../public/test.css";
import Link from "next/link";
import {
  LandingPageIcon,
  FrontendDevelopmentIcon,
  BrandIdentityIcon,
  CopywritingIcon,
  WebsiteDevelopmentIcon,
} from "@/public/icons/ServiceIcons";

export default function ServiceCategoriesSection() {
  return (
    <SectionWrapper>
      {/* Service categories container */}
      {serviceCategories.map((serviceCategory) => (
        <React.Fragment key={serviceCategory.id}>
          <h2 className="w-full text-5xl text-[#ffffff]">
            {serviceCategory.serviceCategoryTitle}
          </h2>
          <div
            key={serviceCategory.serviceCategoryTitle}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10 pt-12"
          >
            {serviceCategory.services.map((service) => (
              <Link
                href={`/services/${service.categoryTitle}`}
                key={service.id}
                className={`overflow-hidden relative flex flex-col gap-2 rounded-lg p-4 py-8  border-[0.5px] border-[#252525]`}
              >
                {/* Blur background */}
                <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-[#0b0b0b] to-[#3B4EB5] z-10 blur-[330px]"></div>
                {/* Service Card */}
                <div className="flex flex-col items-center justify-center gap-2 z-20">
                  {service.icon({ width: 200, height: 200 })}
                  <h3 className="w-full text-[#ffffff] font-semibold text-3xl text-center ">
                    {service.categoryTitle}
                  </h3>
                  <p className="text-xl font-light text-[#ffffff] text-center pt-4 z-20">
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
    //bg-gradient-to-r from-[#00A993] to-[#3B4EB5] - stari
    id: 1,
    serviceCategoryTitle: "Web development",
    gradient: "bg-gradient-to-r from-[#0b0b0b] to-[#242E4D]",
    services: [
      {
        id: 1,
        imageSrc: ServiceCategoryTestIcon,
        categoryTitle: "Landing Page",
        categoryDescription:
          "Building high-quality and responsive web landing page, which drives high converting leads to your business",
        icon: BrandIdentityIcon,
      },
      {
        id: 2,
        imageSrc: ServiceCategoryTestIcon,
        categoryTitle: "Website Development",
        categoryDescription:
          "Scaling your business with beautiful multi-page website that serves as a market for your businesses products",
        icon: BrandIdentityIcon,
      },
      {
        id: 3,
        imageSrc: ServiceCategoryTestIcon,
        categoryTitle: "Frontend Development",
        categoryDescription:
          "Building performant, functional and beautiful user interfaces that connects to your backend",
        icon: BrandIdentityIcon,
      },
    ],
  },
  {
    id: 2,
    serviceCategoryTitle: "Digital Marketing",
    gradient: "bg-gradient-to-r from-[#0b0b0b] to-[#242E4D]",
    //Stari gradient - iskoristi u drugim rutama
    // gradient: 'bg-gradient-to-r from-[#0b0b0b] to-[#003961]',
    services: [
      {
        id: 1,
        imageSrc: ServiceCategoryTestIcon,
        categoryTitle: "Copywriting",
        categoryDescription:
          "Creating engrossing stories that your audience finds relatable and that encourage interaction and conversions",
        icon: BrandIdentityIcon,
      },
      {
        id: 2,
        imageSrc: ServiceCategoryTestIcon,
        categoryTitle: "Social Media Management",
        categoryDescription:
          "With well-managed social media initiatives, you can ignite your online presence and build community and brand loyalty",
        icon: BrandIdentityIcon,
      },
      {
        id: 3,
        imageSrc: ServiceCategoryTestIcon,
        categoryTitle: "Meta Hiring Campaigns",
        categoryDescription:
          "Reach the right audience at the right time to maximize return on investment through tailored advertising campaigns",
        icon: BrandIdentityIcon,
      },
    ],
  },
  {
    id: 3,
    serviceCategoryTitle: "Design",
    gradient: "bg-gradient-to-r from-[#0b0b0b] to-[#242E4D]",
    //Stari gradient - iskoristi u drugim rutama
    // gradient: 'bg-gradient-to-r from-[#0b0b0b] to-[#004C52]',
    services: [
      {
        id: 1,
        imageSrc: ServiceCategoryTestIcon,
        categoryTitle: "UI/UX Design",
        categoryDescription:
          "Create intuitive interfaces that facilitate smooth user experiences, increasing user engagement and satisfaction",
        icon: BrandIdentityIcon,
      },
      {
        id: 2,
        imageSrc: ServiceCategoryTestIcon,
        categoryTitle: "Brand Identity",
        categoryDescription:
          "Create a unique brand identity that appeals to your target market and makes you stand out",
        icon: BrandIdentityIcon,
      },
      {
        id: 3,
        imageSrc: ServiceCategoryTestIcon,
        categoryTitle: "Logo Design",
        categoryDescription:
          "Create a distinctive and memorable logo that embodies your brand identity to make a lasting first impression",
        icon: BrandIdentityIcon,
      },
    ],
  },
];
