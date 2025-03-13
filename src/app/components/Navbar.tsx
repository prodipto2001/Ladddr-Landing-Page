"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import MintButton from "./MintButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="bg-transparent py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-800">
            Ladddr.
          </Link>
        </div>

        {/* Desktop Menu - Hidden on mobile */}
        <div className="hidden md:block">
          <div className="p-3 bg-[#d8c4ff]/30 rounded-[100px] shadow-[0px_0px_10px_0px_rgba(92,67,221,0.26)] outline-[0.40px] outline-offset-[-0.40px] outline-[#8a76f3] inline-flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch inline-flex justify-start items-center gap-3">
              <div className="px-6 flex justify-start items-center gap-6">
                <Link href="/about" className="flex justify-center items-center gap-2.5 hover:text-[#5b43dd] transition-colors">
                  <div className="text-center text-[#373737] text-lg font-normal capitalize">About Us</div>
                </Link>
                <Link href="/works" className="flex justify-center items-center gap-2.5 hover:text-[#5b43dd] transition-colors">
                  <div className="text-center text-[#373737] text-lg font-normal capitalize">Works</div>
                </Link>
                <Link href="/services" className="flex justify-center items-center gap-2.5 hover:text-[#5b43dd] transition-colors">
                  <div className="text-center text-[#373737] text-lg font-normal capitalize">Services</div>
                </Link>
              </div>
              <div className="hidden md:block">
                <MintButton />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile MintButton - Only shows MintButton on mobile */}
        <div className="md:hidden">
          <MintButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;