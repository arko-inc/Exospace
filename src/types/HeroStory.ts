export interface HeroStoryItem {
  image: string;
  header: string;
  paragraph: string;
  link: string;
  duration: number;
}

export interface HeroStoryProps {
  stories?: HeroStoryItem[]; // Optional prop to override JSON data
}