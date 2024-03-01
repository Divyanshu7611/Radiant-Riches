import React from "react";

const Card: React.FC<any> = ({
  image,
  discount,
  title,
  description,
  Discountedprice,
  OriginalPrice,
}) => {
  return (
    <div>
      <div className="flex flex-col p-4 gap-1 bg-white rounded-xl">
        <img
          src={image}
          alt="image "
          className="mx-auto mt-2"
          width={141}
          height={103}
        />
        {/* div for discount highlightion */}
        <div className="flex justify-start gap-2 pl-4">
          <div className="p-1 px-2 rounded-lg  text-[#074786] text-sm bg-[#F2F4F7]">
            {discount}
          </div>

          <div className="p-1 px-2 rounded-lg text-[#074786] text-sm bg-[#F2F4F7]">
            Limited time
          </div>
        </div>
        {/* title */}
        <h3 className="font-bold text-base text-[#626E79] text-center">
          {title}
        </h3>
        <p className="text-base text-[#626E79] font-normal">{description}</p>
        {/* price section */}
        <div className="gap-2 flex items-end3">
          <div className="text-[#5C6874] text-xl font-normal">
            $<span>{Discountedprice}</span>
          </div>
          <div className="text-[#9FA9B3] text-sm font-normal">
            {OriginalPrice}
          </div>
          <div className="text-[#EF4C5D] text-sm">({discount})</div>
        </div>
        {/* button */}
        <button className="border-none bg-[#1B88F4] w-full p-3 rounded-lg text-white text-base text-center font-normal cursor-pointer hover:scale-110 transition-all">
          View
        </button>
      </div>
    </div>
  );
};

export default Card;
