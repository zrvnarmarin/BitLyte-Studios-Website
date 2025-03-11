"use client";

import React, { useEffect, useState } from "react";
import "../../public/styles/infiniteCarousel.css";
import { TestimonialCard } from "./TestimonialsSection";
import DjDavidMashTestimonialThumbnail from '../../public/images/projects/1_dj_david_mash/DJ_David_Mash_Testimonial_Thumbnail.png'
import PerinaKulicTestimonialThumbnail from '../../public/images/projects/2_perina_kulic/Perina_Kulic_Testimonial_Thumbnail.png'
import BitXTinTestimonialThumbnail from '../../public/images/projects/Bit_X_Tin.png'
import { StaticImageData } from "next/image";

export const InfiniteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="carousel pt-4 sm:pt-6 md:pt-10">
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial) => (
          <div className="carousel-slide" key={testimonial.id}>
            <TestimonialCard
              id={testimonial.id}
              name={testimonial.name}
              companyName={testimonial.companyName}
              testimonialText={testimonial.testimonialText}
              imageSrc={testimonial.imageSrc}
            />
          </div>
        ))}
      </div>
      {/* <div className="carousel-indicators">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={currentIndex === index ? "active" : ""}
          ></span>
        ))}
      </div> */}
    </div>
  );
};

export default InfiniteCarousel;

export const testimonials: TestimonialCardProps[] = [
  {
    id: 1,
    name: "Perina Kulić",
    companyName: "CEO Of Spell Prijevodi",
    testimonialText: "I was shockingly surprised by the delivery of BitLyte agency. They were super correct and did the job just perfectly! I will definetely work with them again.",
    imageSrc: PerinaKulicTestimonialThumbnail, 
  },
  {
    id: 2,
    name: "DJ David Mash",
    companyName: "DJ David Mash",
    testimonialText: "I was shockingly surprised by the delivery of BitLyte agency. They were super correct and did the job just perfectly! I will definetely work with them again.",
    imageSrc: DjDavidMashTestimonialThumbnail, 
  },
  {
    id: 3,
    name: "Bit X Tin",
    companyName: "CEO of BitX",
    testimonialText: "I was shockingly surprised by the delivery of BitLyte agency. They were super correct and did the job just perfectly! I will definetely work with them again.",
    imageSrc: BitXTinTestimonialThumbnail, 
  },
];

export type TestimonialCardProps = {
  id: number;
  name: string;
  companyName: string;
  testimonialText: string;
  imageSrc: StaticImageData; 
};