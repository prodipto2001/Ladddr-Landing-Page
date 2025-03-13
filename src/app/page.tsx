import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-white">
      {/* Background Image */}
      
      {/* Bottom Background Image */}
      <div className="absolute -bottom-200 left-0 right-0 z-0 transform translate-y-1/4 sm:translate-y-1/5 md:translate-y-1/6 lg:translate-y-1/8">
        <Image
          src="/Mask-group.svg"
          alt="Bottom Background"
          width={1440}
          height={1080}
          className="w-full object-contain"
          priority
        />
      </div>
      
      {/* Content Container - Adjusted for responsive padding */}
      <div className="relative z-20 h-full px-4 sm:px-6 md:px-12 lg:px-24 xl:px-[180px]">
        <Navbar />
        <div className="h-[calc(100vh-80px)]">
          <Hero />
        </div>
      </div>
    </div>
  );
}