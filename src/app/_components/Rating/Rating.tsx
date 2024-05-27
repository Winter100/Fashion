"use client";

import { useState } from "react";
import { Rating as RatingView } from "flowbite-react";

interface RatingType {
  length?: number;
  rating: number;
  onClick: (index: number) => void;
}

export default function Rating({
  length = 5,
  onClick,
  rating = 1,
}: RatingType) {
  const [isHover, setIsHover] = useState(1);

  const handleClick = (index: number) => {
    if (onClick) {
      onClick(index);
    }
  };

  const handleOnMouseEnter = (i: number) => {
    setIsHover(i + 1);
  };

  const handleOnMouseLeave = () => {
    setIsHover(1);
  };
  return (
    <div className=" flex ">
      <RatingView>
        {Array.from({ length }).map((_, i) => (
          <RatingView.Star
            key={i}
            filled={i < rating || i < isHover}
            onMouseEnter={() => handleOnMouseEnter(i)}
            onMouseLeave={handleOnMouseLeave}
            onClick={() => handleClick(i + 1)}
          />
        ))}
      </RatingView>
    </div>
  );
}
