import React from "react";

import Link from "next/link";
import TimeStamp from "./TimeStamp";
import HeaderLink from "./HeaderLink";
import RouteLinks from "./RouteLink";

export default function Header() {
  return (
    <div className="md:w-[1024px] w-full mt-20">
      {/* header Heading */}

      <h1 className="text-richGray md:text-5xl text-2xl font-normal flex flex-col">
        Best Website builders in the US
      </h1>
      <hr className="text-headLine" />

      {/* header timestamps */}
      <TimeStamp />
      <hr />
      {/* header Buttons  */}
      <HeaderLink />
      {/* header Routes Links */}
      <RouteLinks />
    </div>
  );
}
