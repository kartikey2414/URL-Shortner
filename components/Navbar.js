"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-700 text-white h-16 flex justify-between items-center px-5 relative z-50">
      <div className="logo font-bold text-lg">
        <Link href="/">BitLinks</Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-between items-center gap-4">
        <Link href="/">
          <li className="hover:text-purple-200 transition">Home</li>
        </Link>
        <Link href="/about">
          <li className="hover:text-purple-200 transition">About</li>
        </Link>
        <Link href="/shorten">
          <li className="hover:text-purple-200 transition">Shorten</li>
        </Link>
        <Link href="/contact">
          <li className="hover:text-purple-200 transition">Contact Us</li>
        </Link>
        <li className="flex gap-3 items-center ml-2">
          <Link href="/shorten">
            <button className="bg-purple-500 hover:bg-purple-600 font-bold shadow-lg rounded-lg py-1 px-3 cursor-pointer transition">
              Try Now
            </button>
          </Link>
          <Link href="https://github.com" target="_blank">
            <button className="bg-purple-500 hover:bg-purple-600 font-bold shadow-lg rounded-lg py-1 px-3 cursor-pointer transition">
              Github
            </button>
          </Link>
        </li>
      </ul>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none cursor-pointer p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            /* Close Icon (X) */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-purple-800 text-white flex flex-col items-center gap-4 py-6 shadow-xl md:hidden border-t border-purple-600">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <li className="hover:text-purple-200 transition">Home</li>
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            <li className="hover:text-purple-200 transition">About</li>
          </Link>
          <Link href="/shorten" onClick={() => setIsOpen(false)}>
            <li className="hover:text-purple-200 transition">Shorten</li>
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <li className="hover:text-purple-200 transition">Contact Us</li>
          </Link>
          <li className="flex gap-3 items-center mt-2">
            <Link href="/shorten" onClick={() => setIsOpen(false)}>
              <button className="bg-purple-500 hover:bg-purple-600 font-bold shadow-lg rounded-lg py-1.5 px-4 cursor-pointer transition">
                Try Now
              </button>
            </Link>
            <Link href="https://github.com" target="_blank" onClick={() => setIsOpen(false)}>
              <button className="bg-purple-500 hover:bg-purple-600 font-bold shadow-lg rounded-lg py-1.5 px-4 cursor-pointer transition">
                Github
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;