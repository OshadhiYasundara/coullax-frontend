'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-24 flex justify-between items-center sm:mx-20 mx-5">

      <Link href="/">
      <Image src="/logo.png" alt="logo" width={150} height={30} />
      </Link>

      {/* Hamburger Menu Button */}
      <div className="sm:hidden">
        <button
          className="focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-8 h-8 text-custom-text"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:block">
        <ul className="flex space-x-6 text-custom-text font-merriweather text-lg font-semibold">
          <li>
            <Link href="/" className="delay-100 ease-out transition hover:text-fuchsia-900">
              Home
            </Link>
          </li>
          <li>
            <Link href="/allreviews" className="delay-100 ease-out transition hover:text-fuchsia-900">
              All Reviews
            </Link>
          </li>
          <li>
            <Link href="/addreview" className="delay-100 ease-out transition hover:text-fuchsia-900">
              Add Review
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-24 left-0 w-full bg-custom-yellow shadow-md">
          <ul className="flex flex-col space-y-4 text-custom-text font-merriweather text-lg font-semibold p-5">
            <li>
              <Link
                href="/"
                className="delay-100 ease-out transition hover:text-fuchsia-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/allreviews"
                className="delay-100 ease-out transition hover:text-fuchsia-900"
                onClick={() => setIsMenuOpen(false)}
              >
                All Reviews
              </Link>
            </li>
            <li>
              <Link
                href="/addreview"
                className="delay-100 ease-out transition hover:text-fuchsia-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Add Review
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
