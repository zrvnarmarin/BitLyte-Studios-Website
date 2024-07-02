import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import '../../public/test.css'
import Image from "next/image";
import ArrowRight from '../../public/images/Rectangle 1.svg'
import TestimonialExampleImage from '../../public/images/home/TestimonialImage.svg'
import StarIcon from '../../public/images/home/StarIcon.svg'
import ButtonNext from '../../public/images/home/ButtonNextTestimonials.svg'

export default function TestimonialsSection() {
    return (
        <SectionWrapper>
            <h1 className="text-4xl text-primary-brown">
                Our clients can
                <span className="linear-gradient-green-text font-black">
                {" "} trust us {" "}
                </span>
                in every step
            </h1>
            <p className="text-base text-primary-brown font-normal">
                See what some of our closest clients say about us
            </p>

            {/* Testimonial cards container */}
            <div className="w-full flex flex-col gap-8 pt-8">
            {testimonials.map(testimonial =>
                <TestimonialCard
                    key={testimonial.id}
                    id={testimonial.id}
                    name={testimonial.name}
                    companyName={testimonial.companyName}
                    testimonialText={testimonial.testimonialText}
                    imageSrc={testimonial.imageSrc}
                    rating={testimonial.rating}
                />
            )}                
            </div>

            {/* Buttons */}
            <div className="w-full flex items-center justify-between">
                {/* Previous button */}
                <button>
                    <Image src={ButtonNext} alt="next-button-testimonials" className="rotate-180" />
                </button>
                {/* Next button */}
                <button>
                    <Image src={ButtonNext} alt="next-button-testimonials" />
                </button>
            </div>

            {/* Link to all reviews route */}
            <div className="w-full flex">
                <button className="flex items-center gap-2 py-2 px-6 text-[#ffffff] bg-gradient-to-r from-[#59EE99] to-[#17DE6D]  rounded-full text-xl">
                    <Image src={ArrowRight} alt="hero_image"  />
                    View all rewievs
                </button>
            </div>
        </SectionWrapper>
    )
}

export const TestimonialCard = ({ name, companyName, testimonialText, imageSrc, rating } : TestimonialCardProps) => {
    return (
        <div className="flex items-center">
            <div>
                <div className="flex items-center gap-2">
                    <Image src={StarIcon} alt='testimonial image' />
                    <Image src={StarIcon} alt='testimonial image' />
                    <Image src={StarIcon} alt='testimonial image' />
                    <Image src={StarIcon} alt='testimonial image' />
                    <Image src={StarIcon} alt='testimonial image' />
                </div>
                <p className="text-base text-primary-brown font-normal pt-4">
                    {testimonialText}
                </p>
                <div className="flex items-center justify-start gap-2 pt-4">
                    <Image src={imageSrc} alt='testimonial image' />
                    <p className="flex flex-col items-center">
                        <span className="w-full text-base text-primary-brown font-semibold ">{name}</span>
                        <span className="w-full text-base text-primary-brown font-normal ">{companyName}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export type TestimonialCardProps = {
    id: number;
    name: string;
    companyName: string;
    testimonialText: string;
    imageSrc: string;
    rating: number;
}

export const testimonials = [
    {
        id: 1,
        name: 'Nick Forest',
        companyName: 'CEO Of WordPress',
        testimonialText: 'I was shockinlgy surprise by the delivery of BitLyte agency. They were super correct and did the job just perfectly!',
        imageSrc: TestimonialExampleImage,
        rating: 5
    },
    // {
    //     id: 2,
    //     name: 'John Doe',
    //     companyName: 'CEO Of Apartmenify',
    //     testimonialText: 'I was shockinlgy surprise by the delivery of BitLyte agency. They were super correct and did the job just perfectly!',
    //     imageSrc: TestimonialExampleImage,
    //     rating: 5
    // }
]