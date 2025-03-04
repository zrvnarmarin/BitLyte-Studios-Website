import DJDavidMashThumbnailImage from "../../public/images/projects/1_dj_david_mash/thumbnail_DJ_David_Mash.png";
import TestThumbnailImage from "../../public/apartment.webp";

export const projectsThumbnailData: ProjectThumbnailDataProps[] = [
  {
    id: 1,
    href: '/dj-david-mash',
    title: "Rework Of The Instagram Page For Famous Croatian DJ",
    year: 2024,
    clientCountry: 'Croatia',
    description:
      "Our client, David Mash, or Million Yield Structuring Opportunities, is a DJ finance platform changing the game with DeFi. They deliver innovative decentralized web apps with an unparalleled user experience, security, and impact potential.",
    imageSrc: DJDavidMashThumbnailImage,
  },
  {
    id: 2,
    href: '/perina-kulic',
    title: "Website Design And Development For A Copywriter",
    year: 2024,
    clientCountry: 'Croatia',
    description:
      "Rentalio is the rental management tool which we build in collaboration with great team.",
    imageSrc: TestThumbnailImage,
  },
];

export type ProjectThumbnailDataProps = {
    id: number;
    href: string;
    title: string;
    year: number;
    clientCountry: string;
    description: string;
    imageSrc: any;
  };