import React from "react";
import Image from "next/image";
import SectionWrapper from "../../components/SectionWrapper";
import ServiceCategoryTestIcon from '../../../public/images/services/ServiceCategoryTest.svg'
import '../../../public/test.css'

export default function ServiceCategoriesSection() {
    return (
        <SectionWrapper>
            {/* Service categories container */}
            {serviceCategories.map(serviceCategory =>
                <div key={serviceCategory.serviceCategoryTitle} className="flex flex-col gap-4">
                    <h1 className="text-2xl text-primary-brown font-bold">
                        {serviceCategory.serviceCategoryTitle}
                    </h1>
                    {serviceCategory.services.map(service =>
                        <div key={service.id} className="flex flex-col gap-2 rounded-lg p-4 linear-gradient-blue-background">
                        {/* Service Card */}
                        <div className="flex flex-col items-center justify-center gap-2">
                            <Image src={ServiceCategoryTestIcon} alt="service_category_test_icon" />
                            <h3 className="text-xl text-primary-brown font-semibold">{service.categoryTitle}</h3>
                            <p className="text-base text-primary-brown font-normal text-center">{service.categoryDescription}</p>
                        </div>
                    </div>
                    )}
                </div>
            )}
        </SectionWrapper>
    )
}

export const serviceCategories = [
    {
        serviceCategoryTitle: 'Web development',
        services: [
            {
                id: 1,
                imageSrc: ServiceCategoryTestIcon,
                categoryTitle: 'Website Development',
                categoryDescription: 'Our web development will make your website the best ever'
            },
            {
                id: 2,
                imageSrc: ServiceCategoryTestIcon,
                categoryTitle: 'Website Development',
                categoryDescription: 'Our web development will make your website the best ever'
            },
            {
                id: 3,
                imageSrc: ServiceCategoryTestIcon,
                categoryTitle: 'Website Development',
                categoryDescription: 'Our web development will make your website the best ever'
            }
        ]
    },
    {
        serviceCategoryTitle: 'Social Media Management',
        services: [
            {
                id: 1,
                imageSrc: ServiceCategoryTestIcon,
                categoryTitle: 'Website Development',
                categoryDescription: 'Our web development will make your website the best ever'
            },
            {
                id: 2,
                imageSrc: ServiceCategoryTestIcon,
                categoryTitle: 'Website Development',
                categoryDescription: 'Our web development will make your website the best ever'
            },
            {
                id: 3,
                imageSrc: ServiceCategoryTestIcon,
                categoryTitle: 'Website Development',
                categoryDescription: 'Our web development will make your website the best ever'
            }
        ]
    },
    {
        serviceCategoryTitle: 'Design',
        services: [
            {
                id: 1,
                imageSrc: ServiceCategoryTestIcon,
                categoryTitle: 'Website Development',
                categoryDescription: 'Our web development will make your website the best ever'
            },
            {
                id: 2,
                imageSrc: ServiceCategoryTestIcon,
                categoryTitle: 'Website Development',
                categoryDescription: 'Our web development will make your website the best ever'
            },
            {
                id: 3,
                imageSrc: ServiceCategoryTestIcon,
                categoryTitle: 'Website Development',
                categoryDescription: 'Our web development will make your website the best ever'
            }
        ]
    }
]