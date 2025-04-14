import type React from "react"
import HeroSectionWrapper from "../components/HeroSectionWrapper"

export default function PrivacyPolicySection() {
  return (
    <HeroSectionWrapper>
      <h2 className="w-full text-[35px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-start z-20">
        Privacy Policy
      </h2>
      <p className="text-xl font-light text-[#ffffff] text-start pt-4 pb-8 z-20">Effective Date: 06.10.2024</p>

      <div className="relative rounded-lg pt-4 sm:pt-8 md:pt-12">
        {/* Blur background */}
        <div className="w-64 h-64 absolute inset-0 bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] z-10 blur-[930px]"></div>

        {/* Introduction */}
        <div className="overflow-hidden relative rounded-lg p-6 border-[0.5px] border-[#0a2030] z-20 mb-6">
          <div className="w-32 h-32 absolute bottom-0 top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[130px] pointer-events-none"></div>
          <p className="text-xl font-light text-[#ffffff] text-start z-40">
            BitLyte Studios LTD ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, and safeguard your personal data when you interact with our website.
          </p>
        </div>

        {/* Privacy policy sections */}
        {privacyData.map((section) => (
          <PolicyCard key={section.id} title={section.title} content={section.content} />
        ))}

        {/* Contact section */}
        <div className="overflow-hidden relative rounded-lg p-6 border-[0.5px] border-[#0a2030] z-20 mt-6">
          <div className="w-32 h-32 absolute bottom-0 top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[130px] pointer-events-none"></div>
          <h3 className="text-[#ffffff] font-semibold text-2xl sm:text-[28px] md:text-3xl leading-tight text-start z-20">
            10. Contact
          </h3>
          <p className="text-xl font-light text-[#ffffff] text-start pt-4 z-40">
            If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact:
            <br />
            <br />
            BitLyte Studios LTD
            <br />📧 info@bitlyte-studios.com
          </p>
        </div>
      </div>
    </HeroSectionWrapper>
  )
}

type PolicyCardType = {
  title: string
  content: string | React.ReactNode
}

const PolicyCard = ({ title, content }: PolicyCardType) => {
  return (
    <div className="overflow-hidden relative rounded-lg p-6 border-[0.5px] border-[#0a2030] z-20 mb-6">
      <div className="w-32 h-32 absolute bottom-0 top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[130px] pointer-events-none"></div>
      <h3 className="text-[#ffffff] font-semibold text-2xl sm:text-[28px] md:text-3xl leading-tight text-start z-20">
        {title}
      </h3>
      <div className="text-xl font-light text-[#ffffff] text-start pt-4 z-40">{content}</div>
    </div>
  )
}

const privacyData = [
  {
    id: 1,
    title: "1. Who We Are",
    content: (
      <>
        BitLyte Studios LTD
        <br />
        Registered in England and Wales
        <br />
        Email: info@bitlyte-studios.com
        <br />
        <br />
        We are the data controller for any personal data submitted through our website.
      </>
    ),
  },
  {
    id: 2,
    title: "2. What Data We Collect",
    content: (
      <>
        We only collect personal data that you provide voluntarily through our contact form, which may include:
        <br />
        <br />
        Full Name
        <br />
        <br />
        Email Address
        <br />
        <br />
        Message content
        <br />
        <br />
        We do not use cookies or tracking technologies on our website.
      </>
    ),
  },
  {
    id: 3,
    title: "3. How We Use Your Data",
    content: (
      <>
        We use the information you provide for the following purposes:
        <br />
        <br />
        To respond to your enquiries
        <br />
        <br />
        To provide you with requested information about our services
        <br />
        <br />
        To maintain business communication
        <br />
        <br />
        We do not use your data for marketing purposes unless explicitly agreed.
      </>
    ),
  },
  {
    id: 4,
    title: "4. Legal Basis for Processing",
    content: (
      <>
        We process your data under the following legal bases, in accordance with UK GDPR:
        <br />
        <br />
        Consent: You have given us permission to process your data by submitting the contact form.
        <br />
        <br />
        Legitimate Interest: When responding to your inquiry or communicating about a potential project.
      </>
    ),
  },
  {
    id: 5,
    title: "5. How We Store Your Data",
    content:
      "We store your information securely and only for as long as necessary to fulfill the purposes outlined above. Emails and form submissions are stored in our secured inbox, accessible only by authorized personnel.",
  },
  {
    id: 6,
    title: "6. Data Sharing",
    content:
      "We do not sell, rent, or share your personal data with third parties. Your data stays within BitLyte Studios LTD.",
  },
  {
    id: 7,
    title: "7. Your Rights",
    content: (
      <>
        Under the UK General Data Protection Regulation (UK GDPR), you have the right to:
        <br />
        <br />
        Access the personal data we hold about you
        <br />
        <br />
        Request correction or deletion of your data
        <br />
        <br />
        Object to or restrict processing
        <br />
        <br />
        Withdraw consent at any time
        <br />
        <br />
        To exercise any of these rights, contact us at info@bitlyte-studios.com.
      </>
    ),
  },
  {
    id: 8,
    title: "8. Data Security",
    content:
      "We implement appropriate technical and organisational measures to protect your personal data against loss, misuse, or unauthorised access.",
  },
  {
    id: 9,
    title: "9. Changes to This Policy",
    content:
      "We may update this Privacy Policy occasionally. The latest version will always be available on this page with the effective date.",
  },
]
