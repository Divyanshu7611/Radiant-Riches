import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function RouteLink() {
  return (
    <div className="flex gap-3 text-[#5C6874] text-xs mt-4 mb-4 md:text-sm">
      <a>Home</a>
      <a>
        Hosting for all <MdKeyboardArrowRight />
      </a>
      <a>
        Hosting <MdKeyboardArrowRight />
      </a>
      <a>
        Hosting6 <MdKeyboardArrowRight />
      </a>
      <a>Hosting5</a>
    </div>
  );
}
