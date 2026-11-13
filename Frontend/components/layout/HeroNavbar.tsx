"use client";

import Image from "next/image";
import Link from "next/link";

const HeroNavbar = () => {
  return (
    <nav className="relative z-10 w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
            priority
            className="h-16 w-16 object-contain sm:h-20 sm:w-20"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="font-semibold text-gray-800 transition-colors hover:text-primary"
          >
            Home
          </Link>

          <a
            href="#about"
            className="font-semibold text-gray-800 transition-colors hover:text-primary"
          >
            About
          </a>

          <a
            href="#contact"
            className="font-semibold text-gray-800 transition-colors hover:text-primary"
          >
            Contact
          </a>

          <Link
            href="/signup"
            className="rounded-full border border-primary px-5 py-2 font-semibold text-primary transition-colors hover:bg-red-50"
          >
            Sign Up
          </Link>

          <Link
            href="/login"
            className="rounded-full bg-primary px-5 py-2 font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Login
          </Link>
        </div>

        {/* Mobile navigation */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/login"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-red-50"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HeroNavbar;
