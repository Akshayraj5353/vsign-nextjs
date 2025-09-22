"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants/navLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full shadow-sm bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo + Rating */}
        <div className="flex items-center gap-4">
          <Image
            src="/vsignlogo.svg"
            alt="V Sign Enterprises Logo"
            width={180}
            height={80}
            priority
          />
          <Image src="/rating.svg" alt="AVG Rating" width={120} height={80} />
        </div>

        {/* Tagline + Links */}
        <div className="hidden md:flex flex-col items-end gap-2">
          <span className="bg-[#B7E3A0] text-[#2B3F3C] px-4 py-1 rounded-md text-sm font-semibold whitespace-nowrap">
            Top Quality Sign Construction, Delivered On Time
          </span>
          <nav className="flex items-center gap-6">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-[16px] font-medium text-gray-900 hover:text-green-600 transition"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-6 pb-4 gap-4 bg-gray-50">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-gray-800 hover:text-green-600 transition"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
