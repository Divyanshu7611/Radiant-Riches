import React from "react";
import Link from "next/link";
import { SlCheck } from "react-icons/sl";
import { GrCircleInformation } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function TimeStamp() {
  return (
    <div>
      <div className="text-grayText3 flex text-xs items-baseline justify-between">
        <div className="flex items-baseline gap-3">
          <div className="flex font-normal items-baseline gap-2 h-fit">
            <SlCheck className="font-medium relative top-1 text-lg" />
            <h3 className="font-normal">Last Updated - February 22, 2020</h3>
          </div>

          <div className="flex font-normal items-baseline gap-2">
            <GrCircleInformation className="text-lg font-medium top-1 relative" />
            <Link
              className="font-normal no-underline text-[13px] text-grayText3"
              href="#"
            >
              Advertising Disclosure
            </Link>
          </div>
        </div>
        <div>
          <Link
            className="font-normal no-underline text-[13px] text-grayText3 flex items-baseline"
            href="#"
          >
            Top Relevant
            <MdKeyboardArrowDown className="font-medium relative top-1 text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
}
