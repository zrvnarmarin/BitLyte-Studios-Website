import React from "react";
import Image from "next/image";
import SectionWrapper from "../../components/SectionWrapper";
import ServiceCategoryTestIcon from '../../../public/images/services/ServiceCategoryTest.svg'
import '../../../public/test.css'
import LandingPageIcon from '../../../public/images/services/BitLyte_Studios_ikona_Landing_Page_Design_64x64px.svg'
import Link from "next/link";

export default function ServiceCategoriesSection() {
    return (
        <SectionWrapper>
            {/* Service categories container */}
            {serviceCategories.map(serviceCategory =>
                <div key={serviceCategory.serviceCategoryTitle} className="flex flex-col gap-8 pb-4">
                    <h2 className="w-full text-4xl text-[#ffffff]">
                        {serviceCategory.serviceCategoryTitle}
                    </h2>
                    {serviceCategory.services.map(service =>
                    <Link href={`/services/${service.categoryTitle}`} key={service.id} className={`flex flex-col gap-2 rounded-lg p-4 py-8 ${serviceCategory.gradient} border-[0.5px] border-[#252525]`}>
                        {/* Service Card */}
                        <div className="flex flex-col items-center justify-center gap-2">
                            <Image src={LandingPageIcon} alt="service_category_test_icon" />
                            <h3 className="text-[#ffffff] font-semibold text-2xl text-center">{service.categoryTitle}</h3>
                            <p className="text-base text-[#eeeeee] font-normal pt-4 text-center">{service.categoryDescription}</p>
                        </div>
                    </Link>
                    )}
                </div>
            )}
        </SectionWrapper>
    )
}

export const serviceCategories = [
    {
        //bg-gradient-to-r from-[#00A993] to-[#3B4EB5] - stari
        serviceCategoryTitle: 'Web development',
        gradient: 'bg-gradient-to-r from-[#0b0b0b] to-[#4F65A9]',
        services: [
            {
                id: 1,
                imageSrc: ServiceCategoryTestIcon,
                categoryTitle: 'Landing Page',
                categoryDescription: 'Building high-quality and responsive web landing page, which drives high converting leads to your business'
            },
            {
                id: 2,
                imageSrc: ServiceCategoryTestIcon,
                categoryTitle: 'Website Development',
                categoryDescription: 'Scaling your business with beautiful multi-page website that serves as a market for your businesses products'
            },
            {
                id: 3,
                imageSrc: ServiceCategoryTestIcon,
                categoryTitle: 'Frontend Development',
                categoryDescription: 'Building performant, functional and beautiful user interfaces that connects to your backend'
            }
        ]
    },
    {
        serviceCategoryTitle: 'Digital Marketing',
        gradient: 'bg-gradient-to-r from-[#0b0b0b] to-[#005C9D]',
        services: [
            {
                id: 1,
                imageSrc: ServiceCategoryTestIcon,
                categoryTitle: 'Copywriting',
                categoryDescription: 'Creating engrossing stories that your audience finds relatable and that encourage interaction and conversions'
            },
            {
                id: 2,
                imageSrc: ServiceCategoryTestIcon,
                categoryTitle: 'Social Media Management',
                categoryDescription: 'With well-managed social media initiatives, you can ignite your online presence and build community and brand loyalty'
            },
            {
                id: 3,
                imageSrc: ServiceCategoryTestIcon,
                categoryTitle: 'Ad Campaigns',
                categoryDescription: 'Reach the right audience at the right time to maximize return on investment through tailored advertising campaigns'
            }
        ]
    },
    {
        serviceCategoryTitle: 'Design',
        gradient: 'bg-gradient-to-r from-[#0b0b0b] to-[#00929E]',
        services: [
            {
                id: 1,
                imageSrc: ServiceCategoryTestIcon,
                categoryTitle: 'UI/UX Design',
                categoryDescription: 'Create intuitive interfaces that facilitate smooth user experiences, increasing user engagement and satisfaction'
            },
            {
                id: 2,
                imageSrc: ServiceCategoryTestIcon,
                categoryTitle: 'Brand Identity',
                categoryDescription: 'Create a unique brand identity that appeals to your target market and makes you stand out'
            },
            {
                id: 3,
                imageSrc: ServiceCategoryTestIcon,
                categoryTitle: 'Logo Design',
                categoryDescription: 'Create a distinctive and memorable logo that embodies your brand identity to make a lasting first impression'
            }
        ]
    }
]