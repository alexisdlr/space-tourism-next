export interface Route {
  id: number;
  href: string;
  label: string;
}

export interface Destination {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}