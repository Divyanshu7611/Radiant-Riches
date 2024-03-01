"use client";
import React, { useState } from "react";

interface RatingProps {
  ratingStar: number;
}

const Rating: React.FC<RatingProps> = ({ ratingStar }) => {
  const [rating, setRating] = useState(ratingStar);

  const handleHover = (starRating: number) => {
    setRating(starRating);
  };

  const handleClick = (starRating: number) => {
    setRating(starRating);
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const starRating = index + 1;
        return (
          <span
            key={starRating}
            className={`star cursor-pointer text-lg ${
              starRating <= rating ? "text-yellow-500" : "text-gray-300"
            }`}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
