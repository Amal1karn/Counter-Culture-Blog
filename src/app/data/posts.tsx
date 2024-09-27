export interface Post {
  id: number;
  title: string;
  summary: string;
  date: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "The Vibrant Streets of Kathmandu",
    summary: "A deep dive into the rich street culture of Kathmandu.",
    date: "2024-08-01",
  },
  {
    id: 2,
    title: "Hidden Gems in Kathmandu",
    summary: "Exploring some lesser-known but fascinating spots in the city.",
    date: "2024-08-10",
  },
  {
    id: 3,
    title: "Street Art and Its Impact",
    summary: "How street art influences and reflects urban culture.",
    date: "2024-08-15",
  },
];
