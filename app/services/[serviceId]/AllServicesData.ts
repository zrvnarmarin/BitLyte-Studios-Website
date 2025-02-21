//Landing page image
import LandingPageServiceImage from "../../../public/images/services/BitLyte_Studios_ikona_Landing_Page_Design_64x64px.svg";

// Website development image
import WebsiteDevelopmentServiceImage from "../../../public/images/services/BitLyte_Studios_ikona_Website_Design_64x64px (1).svg";

// Frontend development image
import FrontendDevelopmentServiceImage from "../../../public/images/services/BitLyte_Studios_ikona_Web_Development_64x64px (1).svg";

// Copywriting image
import CopywritingServiceImage from "../../../public/images/services/BitLyte_Studios_ikona_Copywriting_64x64px.svg";

// Social media management image
import SocialMediaManagementServiceImage from "../../../public/images/services/BitLyte_Studios_ikona_Social_Media_Assets_64x64px (1).svg";

// Meta hiring campaigns image
import MetaHiringCampaignsServiceImage from "../../../public/images/services/BitLyte_Studios_ikona_MetaHriring_Campaigns_64x64px.svg";

// UI/UX design image
import UIUXServiceImage from "../../../public/images/services/BitLyte_Studios_ikona_UI_UX_Design_64x64px.svg";

// Brand Identity image
import BrandIdentityServiceImage from "../../../public/images/services/BitLyte_Studios_ikona_Brand_Identity_64x64px.svg";

// Logo Design image
import LogoDesignServiceImage from "../../../public/images/services/BitLyte_Studios_ikona_Logo_Design_64x64px.svg";

// Service benefits icons
import { ClientSatisfaction, HighBrandAwareness, RecognizedVisualIdentity } from "./BenefitsSection";

export const allServicesArray = [
    {
      id: 1,
      name: "Landing Page",
      serviceImage: LandingPageServiceImage,
      heroSectionHeading: "Landing Page For Maximized Lead Generation",
      heroSectionSubheading:
        "jebote jebote Our landing pages will help generate your business new leads and drive your sales exponentially by helping you maximize every visitor's potential and making them engage with your product.",
      benefits: [
        {
          id: 1,
        //   icon: <HighBrandAwareness />,
          title: "High Brand Awareness",
          description:
            "A service landing page is crafted with a clear focus on converting visitors into leads or customers. By highlighting key benefits, using compelling calls to action (CTAs), and providing an easy-to-navigate layout, these pages can greatly enhance conversion rates.",
        },
        {
          id: 2,
        //   icon: <ClientSatisfaction />,
          title: "Enhanced User Experience",
          description:
            "A thoughtfully designed landing page offers a smooth and intuitive user experience. This can lead to longer visits and lower bounce rates, which are both positive indicators for search engines and can improve overall engagement.",
        },
        {
          id: 3,
        //   icon: <RecognizedVisualIdentity />,
          title: "Recognized Visual Identity",
          description:
            "A recognized visual identity on landing pages builds brand familiarity and trust. Aligning the landing page with your brand strengthens emotional connections, enhancing lead generation and securing you long-term partnerships.",
        },
      ],
      projectPhases: [
        {
          phaseId: 1,
          phaseName: "Discovery",
          phaseSteps: [
            {
              id: 1,
              stepName: "Planning",
              stepDescription: "Planning is the first step in the procces",
            },
            {
              id: 2,
              stepName: "Wireframing",
              stepDescription:
                "Wireframing is the fisecond rst step in the procces",
            },
          ],
        },
      ],
      faq: [
        {
          id: 1,
          question: "Does my business needs a landing page?",
          answer: "Need of a landing page depends on many factors, including your niche and the rest."
        }
      ]
    },
    {
        id: 2,
        name: "Frontend Development",
        serviceImage: FrontendDevelopmentServiceImage,
        heroSectionHeading: "Modern and Responsive Frontend Development",
        heroSectionSubheading:
          "Our frontend development services ensure that your website or application is built with performance, scalability, and user experience in mind.",
        benefits: [
          {
            id: 1,
            title: "Optimized Performance",
            description:
              "We ensure that your frontend code is optimized for performance, providing fast load times and smooth interactions.",
          },
          {
            id: 2,
            title: "Cross-Browser Compatibility",
            description:
              "Your web application will work seamlessly across different browsers and devices, ensuring a consistent experience for all users.",
          },
          {
            id: 3,
            title: "Scalability and Maintainability",
            description:
              "Our frontend development follows best practices, making it easy to scale and maintain as your business grows.",
          },
        ],
        projectPhases: [
          {
            phaseId: 1,
            phaseName: "Planning & Design",
            phaseSteps: [
              {
                id: 1,
                stepName: "Requirement Analysis",
                stepDescription: "Understanding client needs and project goals.",
              },
              {
                id: 2,
                stepName: "UI/UX Design",
                stepDescription:
                  "Creating wireframes and high-fidelity designs for a seamless user experience.",
              },
            ],
          },
        ],
        faq: [
          {
            id: 1,
            question: "What technologies do you use for frontend development?",
            answer:
              "We use modern technologies like React, Vue.js, and Angular to build high-performance frontend applications.",
          },
        ],
      },
  ];
  