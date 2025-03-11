"use client"
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-transparent py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Ladddr.
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="p-3 bg-[#d8c4ff]/30 rounded-[100px] shadow-[0px_0px_10px_0px_rgba(92,67,221,0.26)] outline-[0.40px] outline-offset-[-0.40px] outline-[#8a76f3] inline-flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch inline-flex justify-start items-center gap-3">
            <div className="px-6 flex justify-start items-center gap-6">
              <div className="flex justify-center items-center gap-2.5">
                <div className="text-center justify-start text-[#373737] text-lg font-normal font-['Space_Grotesk'] capitalize">About Us</div>
              </div>
              <div className="flex justify-center items-center gap-2.5">
                <div className="w-[54px] text-center justify-start text-[#373737] text-lg font-normal font-['Space_Grotesk'] capitalize">Works</div>
              </div>
              <div className="flex justify-center items-center gap-2.5">
                <div className="text-center justify-start text-[#373737] text-lg font-normal font-['Space_Grotesk'] capitalize">Services</div>
              </div>
            </div>
            <div className="w-[179px] h-10 pb-px bg-[#5b43dd] rounded-[100px] outline-1 outline-[#5b43dd] inline-flex flex-col justify-start items-start gap-2.5">
              <div className="self-stretch h-10 flex-1 p-4 bg-[#8a76f3] rounded-[100px] shadow-[inset_0px_-1px_5.099999904632568px_0px_rgba(114,89,243,0.06)] shadow-[inset_0px_1px_0.5px_0px_rgba(216,197,255,0.29)] inline-flex justify-center items-center gap-2.5">
                <div className="justify-start text-[#faf9fe] text-base font-bold font-['Space_Grotesk']">Mint your Project</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu button - keeping this for responsive design */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/about" className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
              About Us
            </Link>
            <Link href="/works" className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
              Works
            </Link>
            <Link href="/services" className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
              Services
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar; 