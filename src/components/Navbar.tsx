"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black shadow-md fixed w-full z-10 h-20">
      {" "}
      {/* Increased height */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <Link
              href="/"
              className={`text-xl font-bold uppercase hover:scale-110 duration-300 ${
                pathname === "/" ? "text-lime-300" : "text-lime-600"
              }`}
            >
              Counter Culture
            </Link>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 focus:outline-none"
            >
              {isOpen ? (
                <FiX size={24} className="text-white" /> // Changed color
              ) : (
                <FiMenu size={24} className="text-white" /> // Changed color
              )}
            </button>
          </div>
          <div
            className={`lg:flex ${
              isOpen ? "block" : "hidden"
            } flex-col lg:space-x-16 h-full absolute top-20 left-0 right-0 bg-black lg:bg-transparent lg:static lg:h-auto lg:flex-row transition-all duration-300 ease-in-out`}
          >
            <Link
              href="/about"
              onClick={handleLinkClick}
              className={`px-3 py-2 rounded-md text-xl font-medium ${
                pathname === "/about" ? "text-fuchsia-600" : "text-lime-600"
              } hover:text-lime-300`}
            >
              The Backstory
            </Link>

            <Link
              href="/blog"
              onClick={handleLinkClick}
              className={`px-3 py-2 rounded-md text-xl font-medium ${
                pathname === "/blog" ? "text-fuchsia-600" : "text-lime-600"
              } hover:text-lime-300`}
            >
              Street Chronicles
            </Link>
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className={` px-3 py-2 rounded-md text-xl font-medium ${
                pathname === "/contact" ? "text-fuchsia-600" : "text-lime-600"
              } hover:text-lime-300`}
            >
              Join The Movement!
            </Link>
            <Link
              href="/artists"
              onClick={handleLinkClick}
              className={` px-3 py-2 rounded-md text-xl font-medium ${
                pathname === "/artists" ? "text-fuchsia-600" : "text-lime-600"
              } hover:text-lime-300`}
            >
              Artists
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
