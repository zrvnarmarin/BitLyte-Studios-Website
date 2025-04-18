import { StaticImport } from "next/dist/shared/lib/get-img-props";
import DJDavidMashHeroSectionImg from "../../../public/images/projects/1_dj_david_mash/DJ_David_Mash_Hero_Section_Image.png";
import AboutSectionProjectImg from "../../../public/images/projects/1_dj_david_mash/thumbnail_DJ_David_Mash.png";
import JaneMcKellenThumbnailImage from "../../../public/images/projects/2_perina_kulic/Jane_McKellen_Thumbnail_Image.png";
import JaneMcKellenHeroSectionImage from "../../../public/images/projects/2_perina_kulic/janemckellenherosectionimage.png";

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
  href: string;
  name: string;
  subtitle: {
    bold: string;
    normal: string;
  };
  services: string[];
  heroImgSrc: string | StaticImport;
  heroSectionGradient: string;
  generalGradientStyle: {
    background: string;
    WebkitBackgroundClip: string;
    backgroundClip: string;
    color: string;
  };
  borderColor: string;
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
    href: "dj-david-mash",
    name: "Dj David Mash",
    subtitle: {
      bold: "Mash Up Your Event",
      normal: "Like A Star",
    },
    services: ["Social Media Management"],
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
        title: "Industry",
        description: "Music",
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
          { id: 1, name: "Brand & Audience Analysis" },
          { id: 2, name: "Digital Presence Audit" },
          { id: 3, name: "Competitor Benchmarking" },
          { id: 4, name: "Goal Setting" },
        ],
      },
      {
        id: 2,
        name: "Design",
        colorGradient: "edff272b",
        goals: [
          { id: 1, name: "Visual Identity & Branding" },
          { id: 2, name: "Social Media Content Strategy" },
          { id: 3, name: "Profile Revamp" },
          { id: 4, name: "Engaging Content Creation" },
        ],
      },
      {
        id: 3,
        name: "Optimization",
        colorGradient: "edff272b",
        goals: [
          { id: 1, name: "Content Scheduling & Management" },
          { id: 2, name: "Targeted Ad Campaigns" },
          { id: 3, name: "SEO & Hashtag Strategy" },
          { id: 4, name: "Platform-Specific Enhancements" },
        ],
      },
      {
        id: 4,
        name: "Tracking Results",
        colorGradient: "edff272b",
        goals: [
          { id: 1, name: "Performance Monitoring" },
          { id: 2, name: "Engagement & Reach Analytics" },
          { id: 3, name: "Campaign Adjustments" },
          { id: 4, name: "Growth Reporting" },
        ],
      },
    ],
    results: [
      {
        id: 1,
        stat: "+40%",
        fact: "Engagement growth in 3 months",
      },
      {
        id: 2,
        stat: "+274",
        fact: "New organic followers gained",
      },
      {
        id: 3,
        stat: "1.7×",
        fact: "More monthly booking inquiries",
      },
      {
        id: 4,
        stat: "+60%",
        fact: "Profile reach through campaigns",
      }
    ],
  },
  {
    id: 2,
    href: "jane-mckellen",
    name: "Jane McKellen",
    subtitle: {
      bold: "Meaningful Words",
      normal: "Into Powerful Storytelling",
    },
    services: ["Website Development", "UX/UI Design"],
    heroImgSrc: JaneMcKellenHeroSectionImage, // Example image file path
    heroSectionGradient: "bg-gradient-to-r from-[#f5f5f5] to-[#ffffff]",
    generalGradientStyle: {
      background: "linear-gradient(to right, #f5f5f5, #ffffff)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
    },
    borderColor: "#eaeae8",
    projectFacts: [
      {
        id: 1,
        title: "Client",
        description: "Jane McKellen",
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
        title: "Industry",
        description: "Creative",
      },
    ],
    solutionCardBgColor: "#f5f5f5",
    aboutSectionImgSrc: JaneMcKellenThumbnailImage,
    fullProjectDescription:
      "Jane McKellen is renowned for her skillful narrative, elegant vocabulary, and versatility in a variety of areas. Jane has improved her web presence and now presents her brand with the same professionalism that she applies to every job, which has increased visibility, drawn in high-caliber clients, and strengthened her standing as a leading provider of writing services.",
    problem:
      "Jane suffered with limited online traction despite her talent and varied portfolio. Missed chances and fewer high-value client inquiries resulted from her inconsistent brand and website, which did not adequately represent the range of her capabilities.",
    solution:
      "We transformed her online presence into a powerful business tool by redefining her brand identity, developing a modern, content-driven website, and putting in place a multi-channel strategy centered on boosting client conversion, SEO optimization, and trust-building.",
    process: [
      {
        id: 1,
        name: "Research & Discovery",
        colorGradient: "#f5f5f5",
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
        colorGradient: "#f5f5f5",
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
        colorGradient: "#f5f5f5",
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
        colorGradient: "#f5f5f5",
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
        stat: "150%",
        fact: "Increase in organic search traffic within 2 months",
      },
      {
        id: 2,
        stat: "25%",
        fact: "Boost in social media engagement from new ad copy",
      },
      {
        id: 3,
        stat: "4X",
        fact: "Improved conversion rate from website visitors",
      },
      {
        id: 4,
        stat: "30%",
        fact: "Increased average time spent on site",
      },
    ],
  },
];
