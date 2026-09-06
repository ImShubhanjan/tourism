export interface Destination {
  id: number;
  name: string;
  state: string;
  category: string;
  /** URL of the destination photo. Change this in destinations.json and the UI updates automatically. */
  pic: string;
  description: string;
  rating: number;
  bestSeason: string;
  duration: string;
  featured: boolean;
  tags: string[];
}
