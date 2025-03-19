import React from "react";
import "../../../public/test.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SectionWrapper from "@/app/components/SectionWrapper";
import { submitContactForm } from "@/app/actions";

export default function ContactSection() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
        <div className="order-2 lg:order-1">
          <ContactInfo />
        </div>
        <div className="order-1 lg:order-2">
          <ContactForm submitContactForm={submitContactForm} />
        </div>
      </div>
    </SectionWrapper>
  );
}
