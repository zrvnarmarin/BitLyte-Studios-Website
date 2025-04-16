import DJDavidMashThumbnailImage from "../../public/images/projects/1_dj_david_mash/thumbnail_DJ_David_Mash.png";
import JaneMcKellenThumbnailImage from "../../public/images/projects/2_perina_kulic/Jane_McKellen_Thumbnail_Image.png"

export const projectsThumbnailData: ProjectThumbnailDataProps[] = [
  {
    id: 1,
    services: ['Social Media Management'],
    href: '/dj-david-mash',
    title: "Rework Of The Instagram Page For A Famous Croatian DJ",
    year: 2024,
    clientCountry: 'Croatia',
    description:
      "We helped DJ David Mash improve his digital presence by redesigning his Instagram and managing content with a clear strategy, which earned him more gigs, higher visibility in music circles and more followers.",
    imageSrc: DJDavidMashThumbnailImage,
  },
  {
    id: 2,
    services: ['Website Development', 'UI/UX Design', 'Copywriting'],
    href: '/jane-mckellen',
    title: "Website Design And Development For A Storyteller And Copywriter",
    year: 2025,
    clientCountry: 'United Kingdom',
    description:
      "When Jane got in touch, her expertise was certain, but she found it difficult to attract high-profile clientele and show the value of her services without a polished website. We designed a site that makes her brand look strong and confident",
    imageSrc: JaneMcKellenThumbnailImage,
  },
];

export type ProjectThumbnailDataProps = {
    id: number;
    services: string[];
    href: string;
    title: string;
    year: number;
    clientCountry: string;
    description: string;
    imageSrc: any;
  };