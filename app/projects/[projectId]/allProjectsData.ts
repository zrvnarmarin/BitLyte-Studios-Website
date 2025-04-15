import { StaticImport } from "next/dist/shared/lib/get-img-props";
import DJDavidMashHeroSectionImg from "../../../public/images/projects/1_dj_david_mash/DJ_David_Mash_Hero_Section_Image.png"
import AboutSectionProjectImg from "../../../public/images/projects/1_dj_david_mash/thumbnail_DJ_David_Mash.png";

export type ProjectFact = {
  id: number;
  title: string;
  description: string;
};

export type Goal = {
  id: number;
  name: string;
};

export type ProcessStep = {
  id: number;
  name: string;
  goals: Goal[];
  colorGradient: string;
};

export type Result = {
  id: number;
  stat: string;
  fact: string;
};

export type Project = {
  id: number;
  name: string;
  subtitle: {
    bold: string;
    normal: string;
  };
  services: string[];
  heroImgSrc: string | StaticImport;
  heroSectionGradient: string;
  generalGradientStyle: {
    background: string,
    WebkitBackgroundClip: string,
    backgroundClip: string,
    color: string,
  },
  borderColor: string,
  aboutSectionImgSrc?: string | StaticImport;
  projectFacts: ProjectFact[];
  solutionCardBgColor: string;
  fullProjectDescription: string;
  problem: string;
  solution: string;
  process: ProcessStep[];
  results: Result[];
};

export const allProjectsData: Project[] = [
  {
    id: 1,
    name: "Dj David Mash",
    subtitle: {
      bold: "Mash Up Your Event",
      normal: "Like A Star",
    },
    services: ["Social Media Management", "Ad Campaign"],
    heroImgSrc: DJDavidMashHeroSectionImg,
    heroSectionGradient: "bg-gradient-to-r from-[#ffe54f] to-[#ffd700]",
    generalGradientStyle: {
      background: "linear-gradient(to right, #ffe54f, #ffd700)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
    },
    borderColor: "#4b4d1e",
    projectFacts: [
      {

        id: 1,
        title: "Client",
        description: "DJ David Mash",
      },
      {
        id: 2,
        title: "Timeframe",
        description: "2 months",
      },
      {
        id: 3,
        title: "Year",
        description: "2024",
      },
      {
        id: 4,
        title: "Client",
        description: "Something",
      },
    ],
    solutionCardBgColor: "#fed702",
    aboutSectionImgSrc: AboutSectionProjectImg,
    fullProjectDescription:
      "David Mash is a rising DJ known for his high-energy sets and genre-blending sound. With his ehnanced digital presence, his brand now matches his talent—captivating audiences, growing his fanbase, and securing more bookings through strategic online storytelling and targeted promotion.",
    problem:
      "David Mash had the talent but lacked digital visibility. Limited online engagement and unclear branding made it harder to attract new fans and consistent bookings.",
    solution:
      "We revamped his branding, optimized social content, and launched targeted campaigns—boosting engagement, increasing bookings, and growing his follower base.",
    process: [
      {
        id: 1,
        name: "Discovery",
        colorGradient: "edff272b",
        goals: [
          {
            id: 1,
            name: "Market Research And UI/UX Design",
          },
          {
            id: 2,
            name: "Brand Identity Of Design",
          },
          {
            id: 3,
            name: "Market Research",
          },
          {
            id: 4,
            name: "Market Research",
          },
        ],
      },
      {
        id: 2,
        name: "Design",
        colorGradient: "edff272b",
        goals: [
          {
            id: 1,
            name: "Market Research And UI/UX Design",
          },
          {
            id: 2,
            name: "Brand Identity Of Design",
          },
          {
            id: 3,
            name: "Market Research",
          },
          {
            id: 4,
            name: "Market Research",
          },
        ],
      },
      {
        id: 3,
        name: "Optimization",
        colorGradient: "edff272b",
        goals: [
          {
            id: 1,
            name: "Market Research And UI/UX Design",
          },
          {
            id: 2,
            name: "Brand Identity Of Design",
          },
          {
            id: 3,
            name: "Market Research",
          },
          {
            id: 4,
            name: "Market Research",
          },
        ],
      },
      {
        id: 4,
        colorGradient: "edff272b",
        name: "Tracking Results",
        goals: [
          {
            id: 1,
            name: "Market Research And UI/UX Design",
          },
          {
            id: 2,
            name: "Brand Identity Of Design",
          },
          {
            id: 3,
            name: "Market Research",
          },
          {
            id: 4,
            name: "Market Research",
          },
        ],
      },
    ],
    results: [
      {
        id: 1,
        stat: '125%',
        fact: 'More gigs via Instagram profile'
      },
      {
        id: 2,
        stat: '34%',
        fact: 'Enlarged user activity'
      },
      {
        id: 13,
        stat: '4X',
        fact: 'Better standing out in the market'
      },
      {
        id: 1,
        stat: '12.56',
        fact: 'Minutes per average spent more on the profile'
      }
    ]
  },
  {
    id: 2,
    name: "Perina Kulic",
    subtitle: {
      bold: "Crafting Words for the Web",
      normal: "Your Brand, Your Voice",
    },
    services: [
      "Website Development", "UX/UI Design"
    ],
    heroImgSrc: DJDavidMashHeroSectionImg, // Example image file path
    heroSectionGradient: "bg-gradient-to-r from-[#f5f5f5] to-[#ffffff]",
    generalGradientStyle: {
      background: "linear-gradient(to right, #f5f5f5, #ffffff)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
    },
    borderColor: "#f7f7f2",
    projectFacts: [
      {
        id: 1,
        title: "Client",
        description: "Perina Kulic",
      },
      {
        id: 2,
        title: "Timeframe",
        description: "3 months",
      },
      {
        id: 3,
        title: "Year",
        description: "2025",
      },
      {
        id: 4,
        title: "Client",
        description: "Something",
      },
    ],
    solutionCardBgColor: "#f5f5f5",
    aboutSectionImgSrc: AboutSectionProjectImg, // Example image file path
    fullProjectDescription:
      "Perina Kulic is a seasoned web copywriter specializing in crafting compelling and conversion-focused content. She has successfully helped brands improve their digital presence with carefully tailored website copy, SEO strategies, and social media content that resonates with their target audience. Perina's expertise spans across diverse industries, creating narratives that not only inform but also engage customers to take action.",
    problem:
      "The client, a tech startup, lacked a clear brand voice and consistent messaging across their website, social media channels, and digital ads, which resulted in low user engagement and conversion rates.",
    solution:
      "Through a comprehensive audit of the client's existing content and a deep understanding of their target market, Perina developed a unique brand voice and optimized their website content for both SEO and user engagement. By aligning messaging with the startup's core values and focusing on customer pain points, the solution led to a significant increase in organic traffic and user interaction.",
    process: [
      {
        id: 1,
        name: "Research & Discovery",
        colorGradient: "#fcffd72b",
        goals: [
          { id: 1, name: "Brand Analysis and Audience Insights" },
          { id: 2, name: "Competitive Content Review" },
          { id: 3, name: "SEO Keyword Research" },
          { id: 4, name: "Audience Persona Development" },
        ],
      },
      {
        id: 2,
        name: "Content Strategy & Thinking",
        colorGradient: "#fcffd72b",
        goals: [
          { id: 1, name: "Message Framework Creation" },
          { id: 2, name: "SEO Strategy Implementation" },
          { id: 3, name: "Content Calendar Development" },
          { id: 4, name: "Cross-Platform Consistency" },
        ],
      },
      {
        id: 3,
        name: "Copywriting & Content Creation",
        colorGradient: "#fcffd72b",
        goals: [
          { id: 1, name: "Website Copy (Homepage, About, Services)" },
          { id: 2, name: "Blog Posts and Articles" },
          { id: 3, name: "SEO-Friendly Meta Descriptions and Headers" },
          { id: 4, name: "Social Media Posts and Ads" },
        ],
      },
      {
        id: 4,
        name: "Optimization & Analytics",
        colorGradient: "#fcffd72b",
        goals: [
          { id: 1, name: "A/B Testing for Copy" },
          { id: 2, name: "Continuous SEO Optimization" },
          { id: 3, name: "Content Performance Monitoring" },
          { id: 4, name: "Conversion Rate Analysis" },
        ],
      },
    ],
    results: [
      {
        id: 1,
        stat: '150%',
        fact: 'Increase in organic search traffic within 2 months'
      },
      {
        id: 2,
        stat: '25%',
        fact: 'Boost in social media engagement from new ad copy'
      },
      {
        id: 3,
        stat: '4X',
        fact: 'Improved conversion rate from website visitors'
      },
      {
        id: 4,
        stat: '30%',
        fact: 'Increased average time spent on site'
      }
    ]
  }
  
];
