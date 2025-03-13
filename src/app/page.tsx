import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white px-[180px]">
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

      <div className="fixed -bottom-240 left-0 right-0 z-0">
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