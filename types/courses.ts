export type Course = {
  id: number;
  title: string;
  instructor: string;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  level: string;
  students: { src: string; alt?: string }[];
  studentCount: string;
  price: number;
  priceType: string;
};
