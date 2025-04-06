import {
  BoostedEngagement,
  RecognizedVisualIdentity,
  ClientSatisfaction,
  IncomeGrowth,
  ResponsiveAndAdaptive,
  StrongDigitalPresence,
  CostEfficiency,
  CustomerRetention,
  BetterCustomerInsight,
  IncreasedTrafficAndLeads,
  CompetitiveAdvantage,
  IncreasedSEO,
  HighBrandAwareness,
} from "./serviceBenefitsIcon";

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

export const allServicesArray = [
  // Web development
  {
    id: 1,
    name: "Landing Page",
    serviceImage: LandingPageServiceImage,
    heroSectionHeading: "For Maximum Impact",
    heroSectionSubheading:
      "Landing page that engage visitors, drive conversions, and support your marketing goals with compelling visuals.",
    benefits: [
      {
        id: 1,
        title: "Responsive Design",
        description:
          "We ensure your website is optimized for all devices, providing users with a seamless experience on any screen.",
        icon: ResponsiveAndAdaptive,
      },
      {
        id: 2,
        title: "Higher Traffic And Leads",
        description:
          "We implement strategies to drive more visitors to your site and convert them into quality leads for your business.",
        icon: IncreasedTrafficAndLeads,
      },
      {
        id: 3,
        title: "Increased Revenue",
        description:
          "Our strategies are designed to drive sales and improve conversion rates, leading to a measurable increase in your revenue.",
        icon: IncomeGrowth,
      },
    ],
    steps: [
      {
        id: 1,
        name: "Discover",
        goals: [
          {
            id: 1,
            name: "Understand business objectives and target audience",
          },
          {
            id: 2,
            name: "Research competitors and market trends",
          },
          {
            id: 3,
            name: "Define key messaging and conversion goals",
          },
        ],
        outcome: "A data-driven strategy aligning business goals, market insights, and clear messaging to drive conversions."
      },
      {
        id: 2,
        name: "Develop",
        goals: [
          {
            id: 1,
            name: "Create wireframes and design mockups",
          },
          {
            id: 2,
            name: "Craft compelling copy and engaging visuals",
          },
          {
            id: 3,
            name: "Optimize layout for user experience and conversions",
          },
        ],
        outcome: "We design visually appealing, user-friendly landing pages with clear messaging to boost conversions and an optimized structure for fast, seamless navigation."
      },
      {
        id: 3,
        name: "Deliver",
        goals: [
          {
            id: 1,
            name: "Develop and test the landing page for performance and responsiveness",
          },
          {
            id: 2,
            name: "Implement SEO best practices and tracking tools",
          },
          {
            id: 3,
            name: "Launch the page and monitor performance",
          },
        ],
        outcome: "We deliver a fully optimized, high-performing landing page with a seamless user experience across devices and data-driven insights for continuous improvement.."
      },
    ],
    faq: [
      {
        id: 1,
        title: "What makes your landing pages different and why should I choose you?",
        answer:
          "Most of the landing pages are just templates without clear messaging to the final user what does your business do. Today, where tools like Chat GPT are widely used, anyone can type the prompt and generate you a generic messaging for your business. The trouble is, that type of landing pages rarely resonates with your targeted audience and your conversion rates suffer. We combine strategic thinking, custom design, targeted copy and marketing expertise to create landing pages that not only look great, but most importantly, they serve as a powerful sales tool that connects your products with your target audience."
      },
      {
        id: 2,
        title: "How long will take you to complete a landing page?",
        answer: "Most landing pages are completed within 2–4 weeks, depending on complexity and client feedback speed. For more detailed, answer, please contact us and we will give you a more precise time estimate."
      },
      {
        id: 3,
        title: "How much will I pay for a landing page?",
        answer: "Pricing depends on the scope — copywriting, design complexity, integrations, etc. However, our minimum engagement price is $500."
      },
      {
        id: 4,
        title: "Can I provide you with the copy for my landing page?",
        answer: "Of course! You can send us the fully written copy and we will design your landing page accordingly. Copy is one of the very earliest steps in crafting a good landing page, so if you are confident with it, absolutely. However, you can still fully rely on our guidance, because we are taking the holistic approach to crafting the landing page, and our in-house team can manage all of the aspects of this service, so that you have the best possible outcome."
      },
      {
        id: 5,
        title: 'Will my landing page be fully responsive on all the devices?',
        answer: "Absolutely. Your landing page will be fully responsive, mobile-friendly and tested across various devices for seamless user experience."
      },
      {
        id: 6,
        title: "What technologies will be used?",
        answer: "Our tools of creation are WebFlow, and in some cases (if the client has specific request) we use Next.js framework. However, we can always develop it with purely HTML, CSS and JavaScript and provide you with all of the exported code."
      },
      {
        id: 7,
        title: " Can I update the landing page myself after it’s live?",
        answer: "Yes! All of the content that you see on your landing page can be changed (copy, images, videos, other assets) by you at any time and you will have full control of your page. If built in WebFlow, you have a CMS which you can update, and if built with Next.js, you can always change everything in the GitHub repo which we will provide you with. We will train you with our recorded video, so that you can learn how to fully manage your landing page post-launch."
      },

    ],
  },
  {
    id: 2,
    name: "Frontend Development",
    serviceImage: FrontendDevelopmentServiceImage,
    heroSectionHeading: "For Seamless User Experience",
    heroSectionSubheading:
      "Frontend experiences that ensure smooth interaction and engagement across all devices.",
    benefits: [
      {
        id: 1,
        title: "Boosted Engagement",
        description:
          "We ensure that your frontend code is optimized for performance, providing fast load times and smooth interactions.",
        icon: BoostedEngagement
        },
      {
        id: 2,
        title: "Responsive Design",
        description:
          "We ensure your website is optimized for all devices, providing users with a seamless experience on any screen.",
        icon: ResponsiveAndAdaptive
        },
      {
        id: 3,
        title: "Increased Revenue",
        description:
          "Our strategies are designed to drive sales and improve conversion rates, leading to a measurable increase in your revenue.",
        icon: IncreasedTrafficAndLeads
        },
    ],
    steps: [
      {
        id: 1,
        name: "Discover",
        goals: [
          {
            id: 1,
            name: "Understand user needs and business objectives",
          },
          {
            id: 2,
            name: "Research market trends and competitors",
          },
          {
            id: 3,
            name: "Define website structure and key features",
          },
        ],
        outcome: "We understand your business goals and user needs, analyze market trends and competitors, and create a well-structured website plan."
      },
      {
        id: 2,
        name: "Develop",
        goals: [
          {
            id: 1,
            name: "Build responsive, accessible, and user-friendly frontend code",
          },
          {
            id: 2,
            name: "Integrate smooth animations and transitions",
          },
          {
            id: 3,
            name: "Optimize code for performance and security",
          },
        ],
        outcome: "We deliver a fully responsive, visually engaging website with smooth animations and interactions, while optimizing frontend code for speed and security."
      },
      {
        id: 3,
        name: "Deliver",
        goals: [
          {
            id: 1,
            name: "Test frontend across devices and browsers",
          },
          {
            id: 2,
            name: "Integrate analytics and tracking tools",
          },
          {
            id: 3,
            name: "Launch the website with optimized frontend performance",
          },
        ],
        outcome: "We deliver an optimized, high-performing website with a seamless experience across all devices, backed by data-driven insights for continuous improvements."
      },
    ],
    faq: [
      {
        id: 1,
        title: "What technologies do you use for frontend development?",
        answer:
          "We use modern technologies like React, Vue.js, and Angular to build high-performance frontend applications.",
      },
    ],
  },
  {
    id: 3,
    name: "Website Development",
    serviceImage: WebsiteDevelopmentServiceImage,
    heroSectionHeading: "For High Conversion Rates",
    heroSectionSubheading:
      "Websites that offer a seamless user experience, helping you establish a strong digital presence and achieve your business goals.",
    benefits: [
      {
        id: 1,
        title: "Responsive Design",
        description:
          "We ensure your website is optimized for all devices, providing users with a seamless experience on any screen.",
        icon: ResponsiveAndAdaptive
        },
      {
        id: 2,
        title: "Strong Digital Presence",
        description:
          "We enhance your online visibility, making sure your brand is easily discoverable across all platforms.",
        icon: StrongDigitalPresence
        },
      {
        id: 3,
        title: "Increased Revenue",
        description:
          "Our strategies are designed to drive sales and improve conversion rates, leading to a measurable increase in your revenue.",
        icon: IncreasedTrafficAndLeads
        },
    ],
    steps: [
      {
        id: 1,
        name: "Discover",
        goals: [
          {
            id: 1,
            name: "Understand business objectived",
          },
          {
            id: 2,
            name: "Conduct competitor and market research",
          },
          {
            id: 3,
            name: "Define website structure and key features",
          },
        ],
        outcome: "We understand your business goals, analyze market trends, and define a clear website structure."
      },
      {
        id: 2,
        name: "Develop",
        goals: [
          {
            id: 1,
            name: "Design wireframes and develop website prototypes",
          },
          {
            id: 2,
            name: "Implement clean, efficient, and scalable code",
          },
          {
            id: 3,
            name: "Optimize for performance, security, and SEO",
          },
        ],
        outcome: "We create a visually engaging website with optimized performance for speed, security, and SEO-friendly features for better rankings."
      },
      {
        id: 3,
        name: "Deliver",
        goals: [
          {
            id: 1,
            name: "Test and refine website across devices and browsers",
          },
          {
            id: 2,
            name: "Integrate analytics and tracking tools",
          },
          {
            id: 3,
            name: "Launch the website and ensure smooth operation",
          },
        ],
        outcome: "We deliver a fully optimized, high-performing website with a seamless user experience across all devices and data-driven insights for ongoing improvement."
      },
    ],
    faq: [
      {
        id: 1,
        title: "What technologies do you use for frontend development?",
        answer:
          "We use modern technologies like React, Vue.js, and Angular to build high-performance frontend applications.",
      },
    ],
  },

  // Digital Marketing
  {
    id: 4,
    name: "Copywriting",
    serviceImage: CopywritingServiceImage,
    heroSectionHeading: "For Compelling Content",
    heroSectionSubheading:
      "Engaging, persuasive and high-converting copy that connects with your audience, strengthens your brand voice and drives results.",
    benefits: [
      {
        id: 1,
        title: "Strong Brand Identity",
        description:
          "We enhance your online visibility, making sure your brand is easily discoverable across all platforms.",
        icon: StrongDigitalPresence
        },
      {
        id: 2,
        title: "Customer Retention",
        description:
          "We help you build lasting relationships with your customers, encouraging repeat business and long-term loyalty.",
        icon: ClientSatisfaction
        },
      {
        id: 3,
        title: "Improved SEO",
        description:
          "We optimize your content and website to increase search engine rankings, driving more organic traffic to your business.",
        icon: IncreasedSEO
      },
    ],
    steps: [
      {
        id: 1,
        name: "Discover",
        goals: [
          {
            id: 1,
            name: "Understand your brand`s voice and target audience",
          },
          {
            id: 2,
            name: "Research industry trends",
          },
          {
            id: 3,
            name: "Define the key messaging and tone for your copy",
          },
        ],
        outcome: "We gain a clear understanding of your brand and audience, create an informed content strategy, and define key messaging and voice to ensure consistency"
      },
      {
        id: 2,
        name: "Develop",
        goals: [
          {
            id: 1,
            name: "Create content outlines and draft copy",
          },
          {
            id: 2,
            name: "Ensure copy aligns with your brand voice and goals",
          },
          {
            id: 3,
            name: "Craft compelling headlines and calls to action",
          },
        ],
        outcome: "We deliver high-quality, engaging copy with strong calls to action, ensuring it reflects your brand's voice"
      },
      {
        id: 3,
        name: "Deliver",
        goals: [
          {
            id: 1,
            name: "Review and refine the copy for clarity and impact",
          },
          {
            id: 2,
            name: "Optimize copy for SEO and readability",
          },
          {
            id: 3,
            name: "Finalize and deliver the completed content",
          },
        ],
        outcome: "We provide polished, ready-to-use copy that is SEO-optimized and delivered on time for maximum impact."
      },
    ],
    faq: [
      {
        id: 1,
        title: "What technologies do you use for frontend development?",
        answer:
          "We use modern technologies like React, Vue.js, and Angular to build high-performance frontend applications.",
      },
    ],
  },
  {
    id: 5,
    name: "Social Media Management",
    serviceImage: SocialMediaManagementServiceImage,
    heroSectionHeading: "For Stronger Connections",
    heroSectionSubheading:
      "Personalized social media strategies that help your brand connect with the right audience, boost engagement, and build long-lasting relationships.",
    benefits: [
      {
        id: 1,
        title: "Strong Brand Identity",
        description:
          "We create consistent and memorable visuals that help your brand stand out and resonate with your audience.",
        icon: StrongDigitalPresence
        },
      {
        id: 2,
        title: "Boosted Engagement",
        description:
          "We create strategies that attract attention and encourage users to interact more with your brand, leading to higher engagement.",
        icon: ClientSatisfaction
        },
      {
        id: 3,
        title: "Higher Brand Awareness",
        description:
          "Our campaigns are designes to boost visibility, helping your brand reach a wider audience and stay top-of-mind.",
        icon: BetterCustomerInsight
        },
    ],
    steps: [
      {
        id: 1,
        name: "Discover",
        goals: [
          {
            id: 1,
            name: "Understand your brand's voice",
          },
          {
            id: 2,
            name: "Conduct audience and research",
          },
          {
            id: 3,
            name: "Define key social media platforms and strategies",
          }
        ],
        outcome: "We gain a clear understanding of your brand and audience, gather insights into market trends, and develop a defined social media strategy to effectively engage your target audience"
      },
      {
        id: 2,
        name: "Develop",
        goals: [
          {
            id: 1,
            name: "Create content calendars and strategies",
          },
          {
            id: 2,
            name: "Design engaging and relevant content",
          },
          {
            id: 3,
            name: "Plan posting schedules and community management",
          }
        ],
        outcome: "We create a concise content plan with engaging visual and written content, ensuring a consistent posting schedule to keep your audience engaged"
      },
      {
        id: 3,
        name: "Deliver",
        goals: [
          {
            id: 1,
            name: "Post content across platforms",
          },
          {
            id: 2,
            name: "Monitor engagement and respond to comments/messages",
          },
          {
            id: 3,
            name: "Analyze performance and adjust strategies",
          }
        ],
        outcome: "We drive increased social media engagement through real-time interaction with your audience, providing  growth and valuable insights"
      },
    ],
    faq: [
      {
        id: 1,
        title: "What technologies do you use for frontend development?",
        answer:
          "We use modern technologies like React, Vue.js, and Angular to build high-performance frontend applications.",
      },
    ],
  },
  {
    id: 6,
    name: "Ad Campaigns",
    serviceImage: MetaHiringCampaignsServiceImage,
    heroSectionHeading: "For Higher Conversions",
    heroSectionSubheading:
      "Ad campaigns that reach your ideal audience and drive engagement, helping you boost conversions and achieve your business goals more effectively.",
    benefits: [
      {
        id: 1,
        title: "Higher Traffic & Leads",
        description:
          "We implement strategies to drive more visitors to your site and convert them into quality leads for your business",
        icon: IncreasedTrafficAndLeads
        },
      {
        id: 2,
        title: "Increased Revenue",
        description:
          "Our strategies are designes to drive sales and improve conversions rates, leading to a measurable increase in your revenue",
        icon: IncomeGrowth
        },
      {
        id: 3,
        title: "Strong Digital Presence",
        description:
          "We enhance your online visibility, making sure your brand is easily discoverable across digital platforms.",
        icon: StrongDigitalPresence
        },
    ],
    steps: [
      {
        id: 1,
        name: "Discover",
        goals: [
          {
            id: 1,
            name: "Understanding client`s objectives",
          },
          {
            id: 2,
            name: "Conduct market research",
          },
          {
            id: 3,
            name: "Identify target audience",
          },
          {
            id: 4,
            name: "Analyze the competition",
          },
        ],
        outcome: "We develop a clear understanding of your business goals, gather insights into market trends, and establish a well-defined project scope to guide the process."
      },
      {
        id: 2,
        name: "Develop",
        goals: [
          {
            id: 1,
            name: "Create actionable Strategies",
          },
          {
            id: 2,
            name: "Set clear milestones and deadlines",
          },
          {
            id: 3,
            name: "Establish budget",
          },
        ],
        outcome: "We create a clear campaign plan, use resources efficiently, distribute the budget wisely, and track performance with measurable metrics."
      },
      {
        id: 3,
        name: "Deliver",
        goals: [
          {
            id: 1,
            name: "Finalize and creatives and copy",
          },
          {
            id: 2,
            name: "Launch add campaigns across platforms",
          },
          {
            id: 3,
            name: "Monitor campaign performance",
          },
          {
            id: 4,
            name: "Optimize based on initial results",
          },
        ],
        outcome: "We provide real-time data and insights on ad performance, optimize ads for better results, and drive increased engagement and conversions."
      },
    ],
    faq: [
      {
        id: 1,
        title: "What technologies do you use for frontend development?",
        answer:
          "We use modern technologies like React, Vue.js, and Angular to build high-performance frontend applications.",
      },
    ],
  },

  // Digital Design
  {
    id: 7,
    name: "UI/UX Design",
    serviceImage: UIUXServiceImage,
    heroSectionHeading: "For a Enjoyable and user-friendly experience ",
    heroSectionSubheading:
      "Creating intuitive, user-friendly designs that enhance engagement and deliver a seamless experience.",
    benefits: [
      {
        id: 1,
        title: "Optimized Performance",
        description:
          "We ensure your website/app is optimized for all devices, providing users with a seamless experience on any screen.",
        icon: ResponsiveAndAdaptive
        },
      {
        id: 2,
        title: "Customer Satisfaction",
        description:
          "We focus on delivering high-quality services and experiences that keep your customers happy and loyal.",
        icon: CustomerRetention
        },
      {
        id: 3,
        title: "Enhanced Customer Insights",
        description:
          "We gather valuable data to help you understand customer behavior and preferences, guiding better decision-making.",
        icon: BetterCustomerInsight
        },
    ],
    steps: [
      {
        id: 1,
        name: "Discover",
        goals: [
          {
            id: 1,
            name: "Understand user needs, business goals, and industry trends",
          },
          {
            id: 2,
            name: "Conduct competitor analysis and user research",
          },
          {
            id: 3,
            name: "Identify pain points and opportunities for improvement",
          },
        ],
        outcome: "We understand user and business needs, analyze market trends and competitors, and set clear user experience goals."
      },
      {
        id: 2,
        name: "Develop",
        goals: [
          {
            id: 1,
            name: "Design wireframes, prototypes, and interactive mockups",
          },
          {
            id: 2,
            name: "Ensure smooth navigation and engaging user interactions",
          },
          {
            id: 3,
            name: "Prioritize accessibility and user-centered design principles",
          },
        ],
        outcome: "We understand user and business needs, analyze market trends and competitors, and set clear user experience goals."
      },
      {
        id: 3,
        name: "Deliver",
        goals: [
          {
            id: 1,
            name: "Finalize UI/UX design for development handoff",
          },
          {
            id: 2,
            name: "Provide design assets and style guides for consistency",
          },
          {
            id: 3,
            name: "Conduct usability testing and refine based on feedback",
          },
        ],
        outcome: "We deliver high-quality, ready-to-implement UI/UX designs with consistent guidelines and an optimized user experience for better engagement."
      },
    ],
    faq: [
      {
        id: 1,
        title: "What technologies do you use for frontend development?",
        answer:
          "We use modern technologies like React, Vue.js, and Angular to build high-performance frontend applications.",
      },
    ],
  },
  {
    id: 8,
    name: "Brand Identity",
    serviceImage: BrandIdentityServiceImage,
    heroSectionHeading: "For A Lasting Impression",
    heroSectionSubheading:
      "Identities that reflect your values, connect with your audience, and set you apart from the competition.",
    benefits: [
      {
        id: 1,
        title: "Boosted Engagement",
        description:
          "We create strategies that attract attention and encourage users to interact more with your brand, leading to higher engagement.",
        icon: IncreasedTrafficAndLeads
        },
      {
        id: 2,
        title: "Competitive Advantage",
        description:
          "We help you stay ahead of the competition by identifying unique opportunities and crafting strategies that set you apart.",
        icon: CompetitiveAdvantage
        },
      {
        id: 3,
        title: "Strong Digital Presence",
        description:
          "We enhance your online visibility, making sure your brand is easily discoverable across all platforms.",
        icon: StrongDigitalPresence
        },
    ],
    steps: [
      {
        id: 1,
        name: "Discover",
        goals: [
          {
            id: 1,
            name: "Understand brand values, mission, and target audience",
          },
          {
            id: 2,
            name: "Analyze market trends and competitors",
          },
          {
            id: 3,
            name: "Define core brand messaging and positioning",
          },
        ],
        outcome: "We develop a clear understanding of your brand values, gain insights into market trends and competitors, and define a strong brand personality and identity."
      },
      {
        id: 2,
        name: "Develop",
        goals: [
          {
            id: 1,
            name: "Design logo, color palette, typography, and visual elements",
          },
          {
            id: 2,
            name: "Create brand messaging, tone of voice, and storytelling",
          },
          {
            id: 3,
            name: "Develop brand guidelines for consistency",
          },
        ],
        outcome: "We create a unique and cohesive brand identity with clear, consistent messaging and comprehensive guidelines for long-term brand success."
      },
      {
        id: 3,
        name: "Deliver",
        goals: [
          {
            id: 1,
            name: "Finalize all brand assets and design elements",
          },
          {
            id: 2,
            name: "Provide brand guidelines for consistent usage",
          },
          {
            id: 3,
            name: "Ensure seamless implementation across all platforms",
          },
        ],
        outcome: "We deliver high-quality, versatile brand assets with clear guidelines to ensure consistency and a fully developed, recognizable brand identity."
      },
    ],
    faq: [
      {
        id: 1,
        title: "What technologies do you use for frontend development?",
        answer:
          "We use modern technologies like React, Vue.js, and Angular to build high-performance frontend applications.",
      },
    ],
  },
  {
    id: 9,
    name: "Logo Design",
    serviceImage: LogoDesignServiceImage,
    heroSectionHeading: "For A Stronger Company Image",
    heroSectionSubheading:
      "Unique and memorable logos that capture the essence of your brand, helping you make a lasting impression on your audience.",
    benefits: [
      {
        id: 1,
        title: "Strong Brand Identity",
        description:
          "We create consistent and memorable visuals that help your brand stand out and resonate with your audience.",
        icon: RecognizedVisualIdentity
        },
      {
        id: 2,
        title: "Customer Satisfaction",
        description:
          "We focus on delivering high-quality services and experiences that keep your customers happy and loyal.",
        icon: CustomerRetention
        },
      {
        id: 3,
        title: "Competitive Advantage",
        description:
          "We help you stay ahead of the competition by identifying unique opportunities and crafting strategies that set you apart.",
        icon: CompetitiveAdvantage
        },
    ],
    steps: [
      {
        id: 1,
        name: "Discover",
        goals: [
          {
            id: 1,
            name: "Understand your brand values, vision, and goals",
          },
          {
            id: 2,
            name: "Research your target audience and competitors",
          },
          {
            id: 3,
            name: "Identify your brand’s unique attributes",
          },
        ],
        outcome: "We develop a clear understanding of your brand values, gain insights into market trends and competitors, and define a strong brand personality and identity."
      },
      {
        id: 2,
        name: "Develop",
        goals: [
          {
            id: 1,
            name: "Create initial logo concepts and sketches",
          },
          {
            id: 2,
            name: "Experiment with fonts, colors, and styles",
          },
          {
            id: 3,
            name: "Refine the design based on client feedback",
          },
        ],
        outcome: "We create initial logo concepts and sketches, experiment with fonts, colors, and styles, and refine the design based on client feedback."
      },
      {
        id: 3,
        name: "Deliver",
        goals: [
          {
            id: 1,
            name: "Finalize and perfect the chosen logo design",
          },
          {
            id: 2,
            name: "Deliver all neccessary logo files and variations",
          },
          {
            id: 3,
            name: "Provide guidelines for logo usage",
          },
        ],
        outcome: "We deliver high-quality, versatile logo files with consistent brand guidelines, ensuring your logo is ready for use across all platforms.s"
      }
    ],
    faq: [
      {
        id: 1,
        title: "What technologies do you use for frontend development?",
        answer:
          "We use modern technologies like React, Vue.js, and Angular to build high-performance frontend applications.",
      },
    ],
  },
];
