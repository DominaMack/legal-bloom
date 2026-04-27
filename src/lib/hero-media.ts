export type HeroMediaItem = {
  id: string;
  src: string;
  poster: string;
  title: string;
};

export const heroMedia: HeroMediaItem[] = [
  {
    id: "domina-intro",
    src: "/love-law-preview.mp4",
    poster: "/love-law-share-preview.png",
    title: "Love Law video spotlight",
  },
];

export const pickRandomHeroMedia = () =>
  heroMedia[Math.floor(Math.random() * heroMedia.length)];
