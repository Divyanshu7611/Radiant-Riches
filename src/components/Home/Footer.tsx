import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function Footer() {
  // mock data of footer
  // const footerLinks = [
  //   { label: "", href: "/" },
  //   { label: "CONTACT", href: "#" },
  // ];
  // category sublinks
  const categoryLinks = [
    { title: "CATEGORIES", href: "#s" },
    { label: "Web Builder", href: "#" },
    { label: "Hosting", href: "#" },
    { label: "Data Center", href: "#" },
    { label: "Robotic-Automation", href: "#" },
  ];
  //contact sub links
  const ContactSubLink = [
    { title: "CONTACT", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms Of Service", href: "#" },
    { label: "Categories", href: "#" },
    { label: "About", href: "#" },
  ];

  return (
    <div className="flex justify-center items-center mt-8 py-10 bg-[#212731] w-full">
      <div className="flex md:w-[1024px] w-full justify-between gap-10">
        <div className="flex flex-col justify-between w-2/4 gap-3">
          {/* sublinks */}
          {/* category sublinks */}
          <div className="flex justify-between items-start gap-5">
            <div className="flex flex-col gap-3 ">
              {categoryLinks.map((link) => (
                <a
                  href={link.href}
                  className="text-[#B6BDC4] no-underline hover:underline"
                  key={"link"}
                >
                  <div className="text-white">{link.title}</div>
                  {link.label}
                </a>
              ))}
            </div>
            {/* contact sublinks */}
            <div className="flex flex-col gap-3 ">
              {ContactSubLink.map((link) => (
                <a
                  href={link.href}
                  className="text-[#B6BDC4] no-underline hover:underline"
                  key={"link"}
                >
                  <div className="text-white">{link.title}</div>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* united states link */}
        <div className="flex items-center justify-center w-1/2">
          <a className="text-[#D1D6DA] cursor-pointer hover:underline">
            United State <IoIosArrowDown />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
