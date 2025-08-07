import Image from "next/image";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="relative w-full bg-white">
      {/* First Section with Background Image */}
      <div className="relative h-screen overflow-hidden">
        {/* Dot Background Image - Only visible in first section */}
        <Image
          src="/dot-bg.svg"
          alt="dotted bg"
          width={1440}
          height={1080}
          className="absolute inset-0 z-10 w-full h-full object-cover"
        />
        {/* Bottom Background Image - Only visible in first section */}
        <div className="absolute -bottom-32 sm:-bottom-48 md:-bottom-64 lg:-bottom-[580px] xl:-bottom-[684px] z-0 transform translate-y-1/3 sm:translate-y-1/4 md:translate-y-1/5 lg:translate-y-1/6">
          <Image
            src="/Mask-group.svg"
            alt="Bottom Background"
            width={1440}
            height={1080}
            className="w-full object-contain"
            priority
          />
        </div>

        {/* Content Container */}
        <div className="relative z-20">
          <Navbar />
          <div>
            <Hero />
          </div>
        </div>
      </div>
    </div>
  );
}
