export type ProductDetail = {
  id: number;
  name: string;
  details: string;
  price: number;
  category: string;
  images: string[];
  colors: string[];
  sizes: string[];
};

export type Review = {
  id: string;
  author: string;
  rating: number;
  text: string;
  created_at: string;
};

const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "John Doe",
    rating: 4,
    text: "I absolutely love this bag, it's so good.",
    created_at: "2026-05-15T10:00:00Z",
  },
  {
    id: "r2",
    author: "Mikhael Roze",
    rating: 5,
    text: "I love this bag, it's so compact.",
    created_at: "2026-06-18T10:00:00Z",
  },
];

export async function getReviews(_id: string): Promise<Review[]> {
  return REVIEWS;
}
