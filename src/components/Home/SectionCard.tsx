import React from "react";
import Link from "next/link";
import Rating from "./Rating";
import { IoIosArrowDown } from "react-icons/io";
import RatingSection from "./RatingSection";
import { text } from "stream/consumers";

interface SectionCardProps {
  image: string;
  imagetext: string;
  heading: string;
  description: string;
  highlight: string;
  ratingNum: number;
  ratingStar: number;
  ratingText: string;
}

const SectionCard: React.FC<SectionCardProps> = ({
  image,
  imagetext,
  heading,
  description,
  highlight,
  ratingNum,
  ratingStar,
  ratingText,
}) => {
  return (
    <div className="flex md:flex-row flex-col justify-between bg-white p-4">
      <div className="flex flex-col jusify-center items-center my-auto">
        <img src={image} />
        <h3 className="text-imageText text-[13px] font-normal">{imagetext}</h3>
      </div>
      <div className="flex flex-col px-5">
        <div className="text-[#4B5665] font-bold text-base">
          {heading}-<span className="font-normal">{description}</span>
        </div>
        {/* main highlight div */}
        <div className="text-[#4B5665] font-bold text-base">
          <h3 className="text-[#2C384A]">Main highlights</h3>
          <p className="font-normal pl-5">{highlight}</p>
          <Link
            href="#"
            className="flex items-baseline text-[#1B88F4] text-base font-normal no-underline hover:font-medium gap-1"
          >
            Show more <IoIosArrowDown className="relative top-1" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center">
        <RatingSection
          ratingNum={ratingNum}
          ratingStar={ratingStar}
          ratingText={ratingText}
        />
        <button className="cursor-pointer px-20 py-2 border-none text-white font-normal text-base hover:scale-105 transition-all bg-[#1B88F4] rounded-xl">
          View
        </button>
      </div>
    </div>
  );
};
export default SectionCard;
