import React from "react";

export default function HeaderLink() {
  return (
    <div>
      <div className="flex justify-start md:gap-10">
        <button className="md:pr-10 md:pl-4 py-2 rounded-xl bg-white border-none text-sm text-grayText3 hover:scale-110 transition-all duration-200 cursor-pointer">
          Tools
        </button>
        <button className="md:pr-10 md:pl-4 pl-2 py-2 rounded-xl bg-white border-none md:text-sm text-xs text-grayText3 hover:scale-110 transition-all duration-200 cursor-pointer">
          AWS Builder
        </button>
        <button className="md:pr-10 md:pl-4 pl-2 py-2 rounded-xl bg-white border-none md:text-sm text-xs text-grayText3 hover:scale-110 transition-all duration-200 cursor-pointer">
          Start Build
        </button>
        <button className="md:pr-10 md:pl-4 pl-2 py-2 rounded-xl bg-white border-none md:text-sm text-xs text-grayText3 hover:scale-110 transition-all duration-200 cursor-pointer">
          Build Supplies
        </button>
        <button className="md:pr-10 md:pl-4 pl-2 py-2 rounded-xl bg-white border-none md:text-sm text-xs text-grayText3 hover:scale-110 transition-all duration-200 cursor-pointer">
          Tooling
        </button>
        <button className="md:pr-10 md:pl-4 pl-2 py-2 rounded-xl bg-white border-none md:text-sm text-xs text-grayText3 hover:scale-110 transition-all duration-200 cursor-pointer">
          BlueHosting
        </button>
      </div>
    </div>
  );
}
