import React from "react";
import SectionWrapper from "../../components/SectionWrapper";
import '../../../public/test.css'

export default function MeetTheFoundersSection() {
    return (
        <SectionWrapper>
            <h2 className="text-5xl text-primary-brown font-semibold">
                Meet the
                <span className="linear-gradient-purple-text font-black">
                    {" "} founders {" "}
                </span>
            </h2>
            <p className="text-base text-primary-brown font-normal pt-4">
                At the heart of our approach is a commitment to personalized service. We believe that 
                every project is unique, and so is every client. That`s why we take the time to get to 
                know you, your business, and your aspirations. Whether you`re a startup looking to make 
                your mark, a small business aiming to expand your reach, or somewhere in between, we`re
                here to support you every step of the way.
            </p>
        </SectionWrapper>
    )
}