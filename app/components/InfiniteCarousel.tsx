"use client";

import React, { useEffect, useState } from "react";
import "../../public/styles/infiniteCarousel.css";
import { TestimonialCard } from "./TestimonialsSection";

export const InfiniteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 3 seconds

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
              // imageSrc={testimonial.imageSrc}
              rating={testimonial.rating}
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
    name: "Nickita Hrischev Forest",
    companyName: "CEO Of WordPress",
    testimonialText:
      "One of the standout features of web development is its intuitive and user-friendly interface. The platform is designed with the end user in mind.",
    // imageSrc: TestimonialExampleImage, 
    rating: 5,
  },
  {
    id: 2,
    name: "John Doe",
    companyName: "CEO Of Apartmenify",
    testimonialText:
      "I was shockingly surprised by the delivery of BitLyte agency. They were super correct and did the job just perfectly!",
    
    rating: 5,
  },
];

export type TestimonialCardProps = {
  id: number;
  name: string;
  companyName: string;
  testimonialText: string;
  // imageSrc: StaticImageData; 
  rating: number;
};