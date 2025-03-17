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
        
        {/* Only showing MintButton */}
        <div>
          <MintButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;