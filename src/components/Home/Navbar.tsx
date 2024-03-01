"use client";
import React from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-center items-center px-4 py-2 shadow-md w-full bg-navbarBg fixed">
      <button
        onClick={toggleMenu}
        className="md:hidden block focus:outline-none focus:ring-2 focus:ring-white rounded-md px-2 py-1"
      >
        {isOpen ? (
          <svg
            xmlns="https://iconscout.com/icons/cross"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M6 18a2 2 0 0 1-2-2.24V15.53L8.97 12 6 8.47zM18 12a2 2 0 0 1 2 2.24V15.53L11.03 12 18 8.47z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path fillRule="evenodd" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        )}
      </button>
      <ul
        className={`md:flex md:space-x-4 md:justify-end list-none items-baseline ${
          isOpen ? "block" : "hidden"
        } text-[#D1D6DA] hover:text-white px-3 py-2 rounded-md`}
      >
        <li>
          <form action="/search" className="flex items-center md:mr-0">
            <input
              type="text"
              placeholder="Search"
              className="bg-white text-[#D1D6DA] rounded-md px-2 py-1 mr-2 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </form>
        </li>
        <li>
          <a href="#" className="text-[#D1D6DA] no-underline">
            Categories
          </a>
        </li>
        <li>
          <a href="#" className="text-[#D1D6DA] no-underline">
            Website Builders
          </a>
        </li>
        <li>
          <a href="#" className="text-[#D1D6DA] no-underline">
            Today's Deals
          </a>
        </li>
      </ul>
    </nav>
  );
}
