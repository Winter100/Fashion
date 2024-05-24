import { Rating } from "flowbite-react";

export default function RatingView({ rating }: { rating: number }) {
  const maxStars = 5;
  const stars = Array.from({ length: maxStars }, (_, i) => (
    <Rating.Star key={i} filled={i < rating} />
  ));
  return (
    <Rating>
      {stars}
      <p className="ml-2 text-xl font-medium text-gray-500 dark:text-gray-400">
        {rating}
      </p>
    </Rating>
  );
}
