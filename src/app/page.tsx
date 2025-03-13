import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white px-4 sm:px-6 md:px-12 lg:px-24 xl:px-[180px]">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-10">
        <Image
          src="/background-image.svg"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
          quality={100}
        />
      </div>

      {/* Bottom Background Image - Adjusted for mobile */}
      <div className="fixed -bottom-40 sm:-bottom-80 md:-bottom-120 lg:-bottom-180 xl:-bottom-240 left-0 right-0 z-0">
        <Image
          src="/Mask-group.svg"
          alt="Bottom Background"
          width={1080}
          height={1080}
          className="w-full object-contain"
          priority
        />
      </div>
      
      <Navbar />
      <Hero />
    </div>
  );
}