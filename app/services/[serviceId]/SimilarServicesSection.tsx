import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/SectionWrapper";
import { serviceCategories } from "../(services-sections)/ServiceCategoriesSection";
import LandingPageIcon from '../../../public/images/services/BitLyte_Studios_ikona_Landing_Page_Design_64x64px.svg'

export default function SimilarServicesSection() {

  return (
    <SectionWrapper>
        <h2 className="w-full text-4xl text-[#ffffff]">
          See similar sections
        </h2>
        {serviceCategories.slice(0, 1).map(serviceCategory =>
          <div key={serviceCategory.serviceCategoryTitle} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-4">
            {serviceCategory.services.map(service =>
            <div key={service.id} className={`flex flex-col gap-2 rounded-lg p-4 py-8 ${serviceCategory.gradient} border-[0.5px] border-[#252525]`}>
              {/* Service Card */}
              <div className="flex flex-col items-center justify-center gap-2">
                <Image src={LandingPageIcon} alt="service_category_test_icon" />
                <h3 className="text-[#ffffff] font-semibold text-2xl text-center">{service.categoryTitle}</h3>
                <p className="text-base text-[#eeeeee] font-normal pt-4 text-center">{service.categoryDescription}</p>
              </div>
            </div>
            )}
          </div>
        )}
    </SectionWrapper>
  )
}
