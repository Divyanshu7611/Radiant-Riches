import React from "react";
import Rating from "./Rating";

const RatingSection: React.FC<any> = ({
  ratingNum,
  ratingStar,
  ratingText,
}) => {
  return (
    <div className="bg-[#F3F9FF] flex justify-between items-center flex-col px-5">
      <h1 className="font-normal text-3xl text-[#074786]">{ratingNum}</h1>
      <h3 className="font-normal text-xs text-[#074786]">{ratingText}</h3>
      <Rating ratingStar={ratingStar} />
    </div>
  );
};
export default RatingSection;
