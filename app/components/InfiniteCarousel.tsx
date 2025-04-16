"use client";

import React, { useEffect, useState } from "react";
import "../../public/styles/infiniteCarousel.css";
import { TestimonialCard } from "./TestimonialsSection";
import DjDavidMashTestimonialThumbnail from '../../public/images/projects/1_dj_david_mash/DJ_David_Mash_Testimonial_Thumbnail.png'
import PerinaKulicTestimonialThumbnail from '../../public/images/projects/2_perina_kulic/Perina_Kulic_Thumbnail_Image.png'
import BitXTinTestimonialThumbnail from '../../public/images/projects/Bit_X_Tin.png'
import JaneMcKellenTestimonialThumbnail from "../../public/images/projects/2_perina_kulic/Jane_McKellen_Testimonial_Thumbnail.png"
import { StaticImageData } from "next/image";

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
              imageSrc={testimonial.imageSrc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;

export const testimonials: TestimonialCardProps[] = [
  {
    id: 1,
    name: "Perina Kulić",
    companyName: "Freelance Copywriter",
    testimonialText: "I was amazed by the innovative solutions and suggestions of the BitLyte agency. All hands were on deck, proving that they're all in each step of the way, which is a really refreshing approach. They truly are masters of visually striking and effective design, as well as constructive communication and support.",
    imageSrc: PerinaKulicTestimonialThumbnail, 
  },
  {
    id: 2,
    name: "David Mašić",
    companyName: "DJ",
    testimonialText: "Before working with BitLyte Studios, my Instagram was not growing as much as I expected it to. They completely turned it around. My follower count grew with real fans, my posts actually reached the right audience, and I started getting DMs from promoters. Now, my page isn’t just for show — it’s bringing me bookings. Highly recommend!",
    imageSrc: DjDavidMashTestimonialThumbnail, 
  },
  {
    id: 3,
    name: "Tin Šarić",
    companyName: "CEO of BitX",
    testimonialText: "We use BitLyte Studios all the time at BitX, and they never disappoint. Their commitment to making sure we’re happy with the end result is impressive, and they’ve got the skills to back it up. It’s always a great experience working with them!",
    imageSrc: BitXTinTestimonialThumbnail, 
  },
  {
    id: 4,
    name: "Jane McKellen",
    companyName: "Writer And Translator",
    testimonialText: "Working with this team was exactly what I needed. They truly understood my vision and brought it to life with a website that feels like me. I’ve already seen more interest in my services, and clients constantly compliment the site. I couldn't be happier.",
    imageSrc: JaneMcKellenTestimonialThumbnail
  }
];

export type TestimonialCardProps = {
  id: number;
  name: string;
  companyName: string;
  testimonialText: string;
  imageSrc: StaticImageData; 
};