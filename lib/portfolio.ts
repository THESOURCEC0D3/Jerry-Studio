/**
 * Registry of every portfolio image on the site.
 *
 * To add or swap a photo: drop the file into /public/images/portfolio
 * and add/edit an entry here. Width/height are the file's real pixel
 * dimensions — next/image uses them to reserve space so the gallery
 * never jumps while loading.
 *
 * Current files are WhatsApp-compressed (~1080px). When Jerry provides
 * full-resolution exports, replace the files keeping the same names —
 * just update width/height to match.
 */

export type PortfolioImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  category:
    | "Wedding"
    | "Traditional Wedding"
    | "Portrait"
    | "Graduation"
    | "Family"
    | "Behind the Scenes";
};

/** Hero background — Jerry's strongest frame, landscape. */
export const heroImage: PortfolioImage = {
  src: "/images/portfolio/traditional-wedding-couple-bw.jpeg",
  alt: "Black and white photograph of a traditional wedding: the groom, overcome with emotion, covers his face while the bride smiles beside him in beaded bridal attire.",
  width: 1080,
  height: 720,
  category: "Traditional Wedding",
};

export const portfolioImages: PortfolioImage[] = [
  {
    src: "/images/portfolio/white-wedding-couple-reception.jpeg",
    alt: "Bride and groom in matching cream outfits clapping joyfully on a couch beneath a wall of flowers at their wedding reception.",
    width: 1080,
    height: 720,
    category: "Wedding",
  },
  {
    src: "/images/portfolio/traditional-bride-procession.jpeg",
    alt: "Traditional bride in an embroidered red gown and beaded crown leading a procession of women in cultural attire.",
    width: 720,
    height: 1080,
    category: "Traditional Wedding",
  },
  {
    src: "/images/portfolio/studio-portrait-cream.jpeg",
    alt: "Studio portrait of a woman in a flowing cream dress seated before a circular backdrop beside a potted plant.",
    width: 719,
    height: 1080,
    category: "Portrait",
  },
  {
    src: "/images/portfolio/graduation-friends.jpeg",
    alt: "Three graduates in caps and gowns sharing a happy moment together outdoors on campus.",
    width: 720,
    height: 1080,
    category: "Graduation",
  },
  {
    src: "/images/portfolio/mother-and-child-dedication.jpeg",
    alt: "Mother in embroidered red attire and silver headwrap smiling down at her baby dressed in lilac at a child dedication.",
    width: 720,
    height: 1080,
    category: "Family",
  },
  {
    src: "/images/portfolio/portrait-red-dress.jpeg",
    alt: "Elegant portrait of a woman in a red satin dress posing on a staircase with a wrought-iron balustrade.",
    width: 719,
    height: 1080,
    category: "Portrait",
  },
  {
    src: "/images/portfolio/wedding-guest-bowtie.jpeg",
    alt: "Young man in a white shirt and black bow tie holding his jacket over his shoulder at a wedding reception.",
    width: 720,
    height: 1080,
    category: "Wedding",
  },
  {
    src: "/images/portfolio/portrait-blue-dress.jpeg",
    alt: "Woman in a blue and black lace gown posing along a columned walkway with a silver handbag.",
    width: 792,
    height: 1080,
    category: "Portrait",
  },
  {
    src: "/images/portfolio/bridal-makeup-closeup.jpeg",
    alt: "Close-up of a bride having lip liner applied during makeup preparations before her ceremony.",
    width: 720,
    height: 1080,
    category: "Behind the Scenes",
  },
  {
    src: "/images/portfolio/traditional-wedding-couple-bw.jpeg",
    alt: "Black and white photograph of a groom overcome with emotion beside his smiling bride in beaded traditional attire.",
    width: 1080,
    height: 720,
    category: "Traditional Wedding",
  },
];
