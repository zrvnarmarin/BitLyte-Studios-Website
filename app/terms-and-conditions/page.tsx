import type React from "react"
import HeroSectionWrapper from "../components/HeroSectionWrapper"

export default function TermsConditionsSection() {
  return (
    <HeroSectionWrapper>
      <h2 className="w-full text-[35px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-start z-20">
        Terms & Conditions
      </h2>
      <p className="text-xl font-light text-[#ffffff] text-start pt-4 pb-8 z-20">Effective Date: 06.10.2024</p>

      <div className="relative rounded-lg pt-4 sm:pt-8 md:pt-12">
        {/* Blur background */}
        <div className="w-64 h-64 absolute inset-0 bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] z-10 blur-[930px]"></div>

        {/* Introduction */}
        <div className="overflow-hidden relative rounded-lg p-6 border-[0.5px] border-[#0a2030] z-20 mb-6">
          <div className="w-32 h-32 absolute bottom-0 top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[130px] pointer-events-none"></div>
          <p className="text-xl font-light text-[#ffffff] text-start z-40">
            Welcome to the website of BitLyte Studios LTD ("Company", "we", "our", or "us"). These Terms and Conditions
            ("Terms") govern your use of our website and services. By accessing or using our services, you agree to
            these Terms. If you do not agree, please do not use our services.
          </p>
        </div>

        {/* Terms sections */}
        {termsData.map((term) => (
          <TermsCard key={term.id} title={term.title} content={term.content} />
        ))}

        {/* Contact section */}
        <div className="overflow-hidden relative rounded-lg p-6 border-[0.5px] border-[#0a2030] z-20 mt-6">
          <div className="w-32 h-32 absolute bottom-0 top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[130px] pointer-events-none"></div>
          <h3 className="text-[#ffffff] font-semibold text-2xl sm:text-[28px] md:text-3xl leading-tight text-start z-20">
            12. Contact Us
          </h3>
          <p className="text-xl font-light text-[#ffffff] text-start pt-4 z-40">
            For any questions regarding these Terms, please contact us:
            <br />📧 info@bitlyte-studios.com
          </p>
        </div>
      </div>
    </HeroSectionWrapper>
  )
}

type TermsCardType = {
  title: string
  content: string | React.ReactNode
}

const TermsCard = ({ title, content }: TermsCardType) => {
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

const termsData = [
  {
    id: 1,
    title: "1. Company Information",
    content: (
      <>
        BitLyte Studios LTD
        <br />
        Registered in England and Wales
        <br />
        Company Number: 15529598
        <br />
        Email: info@bitlyte-studios.com
      </>
    ),
  },
  {
    id: 2,
    title: "2. Services",
    content:
      "BitLyte Studios LTD provides web development, digital design, and related consultancy services. Details of specific services and deliverables are outlined in individual client agreements or statements of work.",
  },
  {
    id: 3,
    title: "3. Use of Website",
    content: (
      <>
        By using this website, you agree:
        <br />
        <br />
        Not to use it for any unlawful purpose.
        <br />
        <br />
        Not to reproduce, duplicate, copy, sell, or exploit any part of the website without express written consent.
        <br />
        <br />
        Not to engage in any activity that disrupts or interferes with the site's security or functionality.
      </>
    ),
  },
  {
    id: 4,
    title: "4. Intellectual Property",
    content:
      "All content on this website—including text, graphics, logos, code, and media—is owned by BitLyte Studios LTD or its licensors and is protected by copyright and intellectual property laws in the UK and internationally. Use of our content without permission is strictly prohibited.",
  },
  {
    id: 5,
    title: "5. Payment Terms",
    content:
      "Payment terms are defined in project agreements or invoices. All payments are due as agreed unless otherwise stated. Late payments may incur interest at a rate of 4% above the Bank of England base rate. We reserve the right to suspend services for overdue invoices.",
  },
  {
    id: 6,
    title: "6. Project Delivery",
    content: (
      <>
        We aim to meet all agreed project deadlines. However, we are not liable for delays caused by:
        <br />
        <br />
        Client delays or lack of communication.
        <br />
        <br />
        Third-party service issues or force majeure events.
      </>
    ),
  },
  {
    id: 7,
    title: "7. Limitation of Liability",
    content:
      "To the fullest extent permitted by law, BitLyte Studios LTD shall not be liable for any indirect, incidental, or consequential loss or damage, including loss of profit, revenue, data, or use, arising out of your use of our services.",
  },
  {
    id: 8,
    title: "8. GDPR and Data Protection",
    content:
      "We comply with the UK General Data Protection Regulation (UK GDPR). Any personal data you provide will be processed in accordance with our Privacy Policy. We only collect and store data necessary for providing our services.",
  },
  {
    id: 9,
    title: "9. Termination",
    content:
      "We may suspend or terminate services if there is a breach of these Terms or a separate agreement. Upon termination, all outstanding balances become immediately payable.",
  },
  {
    id: 10,
    title: "10. Changes to Terms",
    content:
      "We reserve the right to update or modify these Terms at any time. Any changes will be posted on this page. Continued use of our services after changes are posted constitutes acceptance of the new Terms.",
  },
  {
    id: 11,
    title: "11. Governing Law",
    content:
      "These Terms are governed by the laws of England and Wales. Any disputes arising out of these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
  },
]
