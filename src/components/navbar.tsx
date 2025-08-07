"use client";

import Link from "next/link";
import * as React from "react";
import MintButton from "@/components/mint-button";

const Navbar = () => {
  const [, setIsScrolled] = React.useState(false);

  // Handle scroll effect for navbar
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-transparent py-4 px-6">
      <div className="max-w-[100ch] mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold text-gray-800"
          >
            Ladddr.
          </Link>
        </div>

        {/* Only showing MintButton */}
        <div className="hidden md:inline-block">
          <MintButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
