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
      "Landing pages that engage visitors, drive conversions, and support your marketing goals with compelling visuals.",
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
        outcome:
          "A data-driven strategy aligning business goals, market insights, and clear messaging to drive conversions.",
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
        outcome:
          "We design visually appealing, user-friendly landing pages with clear messaging to boost conversions and an optimized structure for fast, seamless navigation.",
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
        outcome:
          "We deliver a fully optimized, high-performing landing page with a seamless user experience across devices and data-driven insights for continuous improvement..",
      },
    ],
    faq: [
      {
        id: 1,
        title:
          "What makes your landing pages different and why should I choose you?",
        answer:
          "Most of the landing pages are just templates without clear messaging to the final user what your business does. Today, where tools like Chat GPT are widely used, anyone can type the prompt and generate you a generic messaging for your business. The trouble is, that type of landing pages rarely resonates with your targeted audience and your conversion rates suffer. We combine strategic thinking, custom design, targeted copy and marketing expertise to create landing pages that not only look great, but most importantly, they serve as a powerful sales tool that connects your products with your target audience.",
      },
      {
        id: 2,
        title: "How long will it take you to complete a landing page?",
        answer:
          "Most landing pages are completed within 2–4 weeks, depending on complexity and client feedback speed. For more detailed answer, please contact us and we will give you a more precise time estimate.",
      },
      {
        id: 3,
        title: "How much will I pay for a landing page?",
        answer:
          "Pricing depends on the scope — copywriting, design complexity, integrations, etc. However, our minimum engagement price is $750.",
      },
      {
        id: 4,
        title: "Can I provide you with the copy for my landing page?",
        answer:
          "Of course! You can send us the fully written copy and we will design your landing page accordingly. Copy is one of the very earliest steps in crafting a good landing page, so if you are confident with it, absolutely. However, you can still fully rely on our guidance, because we are taking the holistic approach to crafting a landing page, and our in-house team can manage all of the aspects of this service, so that you have the best possible outcome.",
      },
      {
        id: 5,
        title: "Will my landing page be fully responsive on all the devices?",
        answer:
          "Absolutely. Your landing page will be fully responsive, mobile-friendly and tested across various devices for seamless user experience.",
      },
      {
        id: 6,
        title: "What technologies will be used?",
        answer:
          "Our tools of creation are WebFlow and Framer, and in some cases (if the client has specific request) we use Next.js framework. However, we can always develop it with purely HTML, CSS and JavaScript and provide you with all of the exported code.",
      },
      {
        id: 7,
        title: " Can I update the landing page myself after it’s live?",
        answer:
          "Yes! All of the content that you see on your landing page can be changed (copy, images, videos, other assets) by you at any time and you will have full control of your page. If built in WebFlow, you have a CMS which you can update, and if built with Next.js, you can always change everything in the GitHub repo which we will provide you with. We will train you with our recorded video, so that you can learn how to fully manage your landing page post-launch.",
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
        icon: BoostedEngagement,
      },
      {
        id: 2,
        title: "Responsive Design",
        description:
          "We ensure your website is optimized for all devices, providing users with a seamless experience on any screen.",
        icon: ResponsiveAndAdaptive,
      },
      {
        id: 3,
        title: "Increased Revenue",
        description:
          "Our strategies are designed to drive sales and improve conversion rates, leading to a measurable increase in your revenue.",
        icon: IncreasedTrafficAndLeads,
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
        outcome:
          "We understand your business goals and user needs, analyze market trends and competitors, and create a well-structured website plan.",
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
        outcome:
          "We deliver a fully responsive, visually engaging website with smooth animations and interactions, while optimizing frontend code for speed and security.",
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
        outcome:
          "We deliver an optimized, high-performing website with a seamless experience across all devices, backed by data-driven insights for continuous improvements.",
      },
    ],
    faq: [
      {
        id: 1,
        title:
          "What make your website development better than others and why should I choose you?",
        answer:
          "Most of the websites are just a prettyatfirst design with generic content which does not resonate with your ideal customer profile. The second largest problem we identified are the long loading times before anything shows on the screen. The rest of the problems are bad SEO, which is hurtiny our business in the end, because you are not positioned high enough on search engines, rip-off maintaining costs, and Most of the landing pages are just templates without clear messaging to the final user what does your business do. Today, where tools like Chat GPT are widely used, anyone can type the prompt and generate you a generic messaging for your business. The trouble is, that type of landing pages rarely resonates with your targeted audience and your conversion rates suffer. We combine strategic thinking, custom design, targeted copy and marketing expertise to create landing pages that not only look great, but most importantly, they serve as a powerful sales tool that connects your products with your target audience",
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
        icon: ResponsiveAndAdaptive,
      },
      {
        id: 2,
        title: "Strong Digital Presence",
        description:
          "We enhance your online visibility, making sure your brand is easily discoverable across all platforms.",
        icon: StrongDigitalPresence,
      },
      {
        id: 3,
        title: "Increased Revenue",
        description:
          "Our strategies are designed to drive sales and improve conversion rates, leading to a measurable increase in your revenue.",
        icon: IncreasedTrafficAndLeads,
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
        outcome:
          "We understand your business goals, analyze market trends, and define a clear website structure.",
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
        outcome:
          "We create a visually engaging website with optimized performance for speed, security, and SEO-friendly features for better rankings.",
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
        outcome:
          "We deliver a fully optimized, high-performing website with a seamless user experience across all devices and data-driven insights for ongoing improvement.",
      },
    ],
    faq: [
      {
        id: 1,
        title:
          "What make your website development better than others and why should I choose you?",
        answer:
          "Most of the websites are just a pretty-at-first design with generic content which does not resonate with your ideal customer profile. The second largest problem we identified are the long loading times before anything shows on the screen. The rest of the common problems are bad SEO, which is hurting your business in the end, because you are not positioned high enough on search engines, rip-off maintaining costs, and security vulnerabilities. We will make sure that we have a clear branding strategy in place before any design or devleopment occurs, develop you a fast performing and high ranked website, with transparent maintain costs from the beginning, which you can see on the official websites of the platforms on which your website will be built.",
      },
      {
        id: 2,
        title: "What does this service include?",
        answer:
          "We offer full-service development: planning, UX/UI design, front-end and back-end development, responsive optimization, SEO setup, final deployment, and support thorugh all the post-launch steps.",
      },
      {
        id: 3,
        title: "How long will take you to complete website?",
        answer:
          "Most of the websites are completed within 5-10 weeks, depending on the complexity and client`s feedback speed. For more detailed answer, please contact us and we will give you a more precise time estimate.",
      },
      {
        id: 4,
        title: "How much will I pay for the website?",
        answer:
          "Pricing depends on the scope of your project - copywriting, design complexity, CMS integrations etc. However, our minimal engagement rate is $500. For more detailes answer, please contact us and we will give you more precise pricing numbers.",
      },
      {
        id: 5,
        title: "Can I provide you with the copy for my website?",
        answer:
          "Of course! You can send us the fully written copy and we will design your landing page accordingly. Copy is one of the very earliest steps in crafting a good landing page, so if you are confident with it, absolutely. However, you can still fully rely on our guidance, because we are taking the holistic approach to crafting the landing page, and our in-house team can manage all of the aspects of this service, so that you have the best possible outcome.",
      },
      {
        id: 6,
        title: "Will my website be fully responsiveon all the devices?",
        answer:
          "Absolutely. Your landing page will be fully responsive, mobile-friendly and tested across various devices for seamless user experience.",
      },
      {
        id: 7,
        title: "What technologies will be used?",
        answer:
          "Our tools of creation are WebFlow, Framer and Next.js. WebFlow, in most of the cases, covers all of the needs for you to have a professional, well designed and targeted website, with it`s powerful CMS features and if needed, complex animations libraray. We choose WebFlow in most of the cases, Framer for smaller CMS integrations and Next.js for a very complex full stack experience, with almost unlimited integrationsintegrations.",
      },
      {
        id: 8,
        title: "Can I update the website  myself after it’s live?",
        answer:
          "Absolutely! You have a FULL OWNERSHIP over your website. All of the content that you see on your landing page can be changed (copy, images, videos, other assets) by you at any time and you will have full control of your page. If built in WebFlow or Framer, you have a CMS which you can update in any time, and if built with Next.js, you can always change everything in the GitHub repo which we will provide you with. We will train you with our recorded video, so that you can learn how to fully manage your landing page post-launch.",
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
        icon: StrongDigitalPresence,
      },
      {
        id: 2,
        title: "Customer Retention",
        description:
          "We help you build lasting relationships with your customers, encouraging repeat business and long-term loyalty.",
        icon: ClientSatisfaction,
      },
      {
        id: 3,
        title: "Improved SEO",
        description:
          "We optimize your content and website to increase search engine rankings, driving more organic traffic to your business.",
        icon: IncreasedSEO,
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
        outcome:
          "We gain a clear understanding of your brand and audience, create an informed content strategy, and define key messaging and voice to ensure consistency",
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
        outcome:
          "We deliver high-quality, engaging copy with strong calls to action, ensuring it reflects your brand's voice",
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
        outcome:
          "We provide polished, ready-to-use copy that is SEO-optimized and delivered on time for maximum impact.",
      },
    ],
    faq: [
      {
        id: 1,
        title: "What’s included in your copywriting service?",
        answer:
          "We provide strategic copy tailored to your brand, tone of voice, and goals. This can include landing pages, website copy, product descriptions, email sequences, ad copy, and more — depending on your needs.",
      },
      {
        id: 2,
        title: "How much do you charge for the copywriting service?",
        answer:
          "Price depends on the scope of your needs and complexity. However, our minimum engagement price is $750.",
      },
      {
        id: 3,
        title: "How many revisions are included?",
        answer:
          "We usually offer 1–2 rounds of revisions to ensure the copy feels right to you and aligns with your vision. We’re happy to collaborate until it's spot-on, within scope.",
      },
      {
        id: 4,
        title: "Can you match our existing tone of voice?",
        answer:
          "Absolutely. Whether your brand is playful, professional, edgy, or minimalist, we adapt to your voice. If you don’t have a defined tone, we can help develop one with consistency in mind.",
      },
      {
        id: 5,
        title: "Do you write SEO-optimized copy?",
        answer:
          "Yes. We incorporate relevant keywords naturally, follow SEO best practices, and structure content for readability — without sacrificing human appeal.",
      },
      {
        id: 6,
        title: "What formats do you deliver the content in?",
        answer:
          "We typically deliver copy in Google Docs or shared files for easy collaboration and commenting. Final files can be exported or integrated directly depending on your workflow.",
      },
      {
        id: 7,
        title: "How long does it take to deliver the copy?",
        answer:
          "Timelines vary by scope, but most projects are completed within 5–10 business days. We’ll confirm deadlines during onboarding.",
      },
      {
        id: 8,
        title: "Can you help with headlines and calls-to-action?",
        answer:
          "Yes — we specialize in crafting compelling headlines, CTAs, and microcopy that drives engagement and conversions.",
      },
      {
        id: 9,
        title: "Do you also write content for blogs or social media?",
        answer:
          "Yes! We offer blog writing, social media captions, and email marketing content as part of broader content marketing services or as standalone packages.",
      },
      {
        id: 10,
        title: "Will I own the copy after the project is complete?",
        answer:
          "Yes. Once the project is finalized and paid for, all rights to the copy are transferred to you.",
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
        icon: StrongDigitalPresence,
      },
      {
        id: 2,
        title: "Boosted Engagement",
        description:
          "We create strategies that attract attention and encourage users to interact more with your brand, leading to higher engagement.",
        icon: ClientSatisfaction,
      },
      {
        id: 3,
        title: "Higher Brand Awareness",
        description:
          "Our campaigns are designes to boost visibility, helping your brand reach a wider audience and stay top-of-mind.",
        icon: BetterCustomerInsight,
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
          },
        ],
        outcome:
          "We gain a clear understanding of your brand and audience, gather insights into market trends, and develop a defined social media strategy to effectively engage your target audience",
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
          },
        ],
        outcome:
          "We create a concise content plan with engaging visual and written content, ensuring a consistent posting schedule to keep your audience engaged",
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
          },
        ],
        outcome:
          "We drive increased social media engagement through real-time interaction with your audience, providing  growth and valuable insights",
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
        icon: IncreasedTrafficAndLeads,
      },
      {
        id: 2,
        title: "Increased Revenue",
        description:
          "Our strategies are designes to drive sales and improve conversions rates, leading to a measurable increase in your revenue",
        icon: IncomeGrowth,
      },
      {
        id: 3,
        title: "Strong Digital Presence",
        description:
          "We enhance your online visibility, making sure your brand is easily discoverable across digital platforms.",
        icon: StrongDigitalPresence,
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
        outcome:
          "We develop a clear understanding of your business goals, gather insights into market trends, and establish a well-defined project scope to guide the process.",
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
        outcome:
          "We create a clear campaign plan, use resources efficiently, distribute the budget wisely, and track performance with measurable metrics.",
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
        outcome:
          "We provide real-time data and insights on ad performance, optimize ads for better results, and drive increased engagement and conversions.",
      },
    ],
    faq: [
      {
        id: 1,
        title: "What’s included in your ad campaign service?",
        answer:
          "Our full-service ad campaign package covers everything you need for successful digital advertising. This includes strategy development, audience research, ad copywriting, creative design, campaign setup, targeting, A/B testing, ongoing optimization, and performance reporting on a weekly or monthly basis. We handle the entire process so you can focus on your business.",
      },
      {
        id: 2,
        title: "Which platforms do you run ads on?",
        answer:
          "We manage campaigns across all major advertising platforms, including Google Ads (Search, Display, YouTube), Meta Ads (Facebook & Instagram), and LinkedIn Ads. We also work with other platforms depending on your target audience and campaign goals.",
      },
      {
        id: 3,
        title: "How much do I need to spend on ads?",
        answer:
          "We’ll recommend a budget based on your goals, industry, and competitiveness, but as a general rule, we suggest a minimum monthly ad spend of $200 to achieve meaningful results.",
      },
      {
        id: 4,
        title: "How does your pricing work?",
        answer:
          "We offer two flexible pricing models to suit your preferences. Option 1 is a revenue share model: if you pay $1000 in total, we take 10% ($100) as our service fee, and the remaining $900 is used for the ad spend. Option 2 is a flat service fee on top: if you want your full $1000 to go into ads, we simply charge a separate $100 fee, making your total cost $1100. You can choose the model that works best for your business.",
      },
      {
        id: 5,
        title: "How soon can I see results?",
        answer:
          "While some results like increased traffic can show up within a few days, most campaigns start delivering consistent leads or conversions within 2–4 weeks, depending on your industry, audience, and budget.",
      },
      {
        id: 6,
        title: "Do I get to keep the data and creatives?",
        answer:
          "Yes, 100%. All assets, creatives, data, and advertising accounts belong to you. We operate with full transparency and believe you should own everything related to your brand and campaigns.",
      },
      {
        id: 7,
        title: "What if I already have ads running? Can you take over?",
        answer:
          "Absolutely. We’ll begin by auditing your existing campaigns to identify what’s working and where improvements can be made. From there, we’ll either optimize your current setup or rebuild the campaigns to align with best practices and your goals.",
      },
      {
        id: 8,
        title: "Is there a long-term contract?",
        answer:
          "No, we don’t lock you into long-term commitments. Our services are provided on a month-to-month basis because we believe in earning your trust and continued partnership through real, measurable results—not contracts.",
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
        icon: ResponsiveAndAdaptive,
      },
      {
        id: 2,
        title: "Customer Satisfaction",
        description:
          "We focus on delivering high-quality services and experiences that keep your customers happy and loyal.",
        icon: CustomerRetention,
      },
      {
        id: 3,
        title: "Enhanced Customer Insights",
        description:
          "We gather valuable data to help you understand customer behavior and preferences, guiding better decision-making.",
        icon: BetterCustomerInsight,
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
        outcome:
          "We understand user and business needs, analyze market trends and competitors, and set clear user experience goals.",
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
        outcome:
          "We understand user and business needs, analyze market trends and competitors, and set clear user experience goals.",
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
        outcome:
          "We deliver high-quality, ready-to-implement UI/UX designs with consistent guidelines and an optimized user experience for better engagement.",
      },
    ],
    faq: [
      {
        id: 1,
        title: "What does UI/UX mean, and why are you different?",
        answer:
          "UI is how your product looks, UX is how it works — but what makes us different is how we bridge the two. We don’t just create beautiful screens; we focus on real user behavior, data-driven decisions, and conversion goals. Our process blends creativity with strategy, ensuring your users not only enjoy the experience but take meaningful action. It’s design that looks good and performs even better.",
      },
      {
        id: 2,
        title: "How much will I pay for the UI/UX service?",
        answer:
          "The cost of UI/UX design depends on the scope and complexity of your project — like how many screens you need, whether we’re starting from scratch or redesigning, and if mobile or web (or both) are involved. Please contact us here, and  we’ll give you a clear, custom quote based on your exact business needs. However, our minimum engagement price is $500.",
      },
      {
        id: 3,
        title: "How long will it take you to finish my project?",
        answer:
          "Depending on the project size and complexity, it can take from 2 weeks to 12 weeks. Please contact us here and we will give you more precise time estimate and pricing.",
      },
      {
        id: 4,
        title: "How can UI design improve my product?",
        answer:
          "UI design enhances your product’s visual identity and branding. A well-crafted interface makes your product more enjoyable to use and helps users feel more connected to your brand.",
      },
      {
        id: 5,
        title: "What do you need from me to start a UX design project?",
        answer:
          "To kick things off, we’ll need to understand your product, audience, goals, any existing design challenges, and brand guidelines. If you have user feedback, that’s a bonus — but if not, we’ll handle the research. All we really need is your vision!",
      },
      {
        id: 6,
        title: "What happens if I’m not satisfied with the final UI/UX design?",
        answer:
          "Your satisfaction is our priority. We include multiple revision rounds and collaborate with you at every stage to ensure the final design aligns with your vision. We will reguarly update you via our agreed communication channels. If you’re not happy, we’ll make adjustments until it’s just right.",
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
        icon: IncreasedTrafficAndLeads,
      },
      {
        id: 2,
        title: "Competitive Advantage",
        description:
          "We help you stay ahead of the competition by identifying unique opportunities and crafting strategies that set you apart.",
        icon: CompetitiveAdvantage,
      },
      {
        id: 3,
        title: "Strong Digital Presence",
        description:
          "We enhance your online visibility, making sure your brand is easily discoverable across all platforms.",
        icon: StrongDigitalPresence,
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
        outcome:
          "We develop a clear understanding of your brand values, gain insights into market trends and competitors, and define a strong brand personality and identity.",
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
        outcome:
          "We create a unique and cohesive brand identity with clear, consistent messaging and comprehensive guidelines for long-term brand success.",
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
        outcome:
          "We deliver high-quality, versatile brand assets with clear guidelines to ensure consistency and a fully developed, recognizable brand identity.",
      },
    ],
    faq: [
      {
        id: 1,
        title:
          "What is brand identity, and why should I choose you for establishing mine?",
        answer:
          "Good question! Brand identity is the visual and emotional language of your business — everything from your logo, color palette, typography to your tone of voice and messaging. It’s what makes people recognize, remember, and trust you. A strong identity doesn’t just make you look good — it helps you attract the right audience, communicate clearly, and grow with confidence. Our final goal is to create is to create a distinctive and recognizable brand identity design.",
      },
      {
        id: 2,
        title: "What does the brand identity service include?",
        answer:
          "We offer a range of brand identity service tailored to different needs, timelines, and budgets. Our starter package includes essentials like a logo, color palette and typography, while our full-service options includes all the previous things with the full guide from just a concept idea to launch, with everything you need to to have a pleasant, distinctive and long-lasting brand identity. Please contact us here, and we’ll walk you through the process step by step.",
      },
      {
        id: 8,
        title: "How long does it take to create a brand identity?",
        answer: "The timeline depends on the scope of the project and how many deliverables are included, but typically, a full brand identity project takes between 2 to 4 weeks. We'll give you a clear schedule after our discovery session, so you know what to expect at every step."
      },
      {
        id: 3,
        title: "How much will I pay for the brand identity service?",
        answer: "We provide custom estimates based on your unique needs and project scope, as timelines and complexity can vary. However, our minimum engagement rate is $850. Since the duration directly affects the final cost, please contact us to get more precise time estimate and pricing.",
      },
      {
        id: 4,
        title: "Do you offer brand guidelines?",
        answer: "Yes, our full brand identity packages include a comprehensive brand guidelines document. It outlines how to use your logo, colors, fonts, tone of voice, and imagery consistently — making it easy to stay on-brand as your business grows."
      },
      {
        id: 5,
        title: "Can I request revisions during the process?",
        answer: "Yes, absolutely! We include multiple revision rounds in all of our brand identity packages. Your feedback is crucial to getting everything just right, and we make sure you're fully involved in shaping the final outcome."
      },
    ]
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
        icon: RecognizedVisualIdentity,
      },
      {
        id: 2,
        title: "Customer Satisfaction",
        description:
          "We focus on delivering high-quality services and experiences that keep your customers happy and loyal.",
        icon: CustomerRetention,
      },
      {
        id: 3,
        title: "Competitive Advantage",
        description:
          "We help you stay ahead of the competition by identifying unique opportunities and crafting strategies that set you apart.",
        icon: CompetitiveAdvantage,
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
        outcome:
          "We develop a clear understanding of your brand values, gain insights into market trends and competitors, and define a strong brand personality and identity.",
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
        outcome:
          "We create initial logo concepts and sketches, experiment with fonts, colors, and styles, and refine the design based on client feedback.",
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
        outcome:
          "We deliver high-quality, versatile logo files with consistent brand guidelines, ensuring your logo is ready for use across all platforms.s",
      },
    ],
    faq: [
      {
        id: 1,
        title: "Why is a logo important, and why should I choose you for designing my logo?",
        answer: "A logo is the face of your brand — it sets the tone, creates recognition, and builds trust from the very first impression. But not all logos are created equal. Our approach is strategic and personalized: we don’t just design something that looks good, we craft a visual identity that connects with your audience and aligns with your brand’s mission. You’ll get custom concepts, a smooth process, and a logo built to grow with your business — not just a trendy design, but a lasting brand asset."
      },
      {
        id: 2,
        title: "What`s included in your logo design service?",
        answer: "Our logo design service includes multiple initial concepts, refinement rounds based on your feedback, and final delivery in multiple file formats (SVG, PNG, JPG, PDF). You’ll also receive variations for different use cases like social media, print, and dark/light backgrounds if needed."
      },
      {
        id: 3,
        title: "How much does logo design cost?",
        answer: "Pricing depends on the number of concepts, revision rounds, and whether it’s a standalone service or part of a larger branding package. We’ll give you a clear, custom quote after understanding your goals and brand vision."
      },
      {
        id: 4,
        title: "How long does it take for you to design a logo?",
        answer: "Most logo design projects take 2-4 weeks. This includes time for concept development, revisions, and final delivery. We want to deliver extraordinary design, which will be memorable and will put your brand to the rightful spot in your industry. Please contact us and we will give you precise time estimate."
      },
      {
        id: 5,
        title: "Can you redesign my existing logo?",
        answer: "We DON`T do redesigning of somebody else`s assets. We do everything ourselves, custom-fitted for your business, as we take a big pride in our own work and we can guarantee that you will be 100% satisfied with our design, as you will see it soon in higher client conversions."
      },
      {
        id: 6,
        title: "Will I own the logo once it’s complete?",
        answer: "Yes, you’ll receive full ownership and usage rights for the final logo. You’re free to use it across digital, print, and merchandise with no restrictions."
      },
      {
        id: 7,
        title: "Do you provide logo files in different formats?",
        answer: "Yes, you’ll receive your final logo in high-resolution formats suitable for web and print — including vector files (SVG, PDF), raster files (PNG, JPG), and any other formats you request."
      }
    ],
  },
];
