import Image from "next/image";
import Navbar from "./components/Navbar";
import MintButton from "./components/MintButton";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F9F8FF]">      {/* Fixed Background Image */}
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
          src="/Mask-group.svg"  // Add your second image to public folder
          alt="Bottom Background"
          width={1920}  // Adjust based on your image
          height={1080} // Adjust based on your image
          className="w-full object-contain"
          priority
        />
      </div>
      
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative z-0 container mx-auto px-4 pt-16 flex justify-center">
        <div className="max-w-5xl flex flex-col items-center">
          <h1 className="text-center text-[#7159f3] text-8xl font-bold font-['Space_Grotesk'] leading-[93.59px] mb-8">
            BASED DESIGN FOR A<br/>TOKENIZED WORLD
          </h1>

          <p className="text-center justify-start text-[#373737] text-4xl font-bold font-['Space_Grotesk']">NO CAP. NO MID. JUST VIBES.</p>

          <MintButton className="pt-14" />

          <div className="w-[60vw] max-w-full flex flex-col sm:flex-row justify-between p-4">
            <div className="p-6 bg-[#ded8ff]/60 rounded-3xl backdrop-blur-[2px] inline-flex justify-start items-center gap-3">
              <div className="text-center justify-start text-[#5b43dd] text-4xl font-bold font-['Space_Grotesk'] capitalize">500+</div>
              <div className="justify-start text-[#5b43dd] text-2xl font-normal font-['Space_Grotesk'] uppercase tracking-wide">Screens<br/>Designed</div>
            </div>

            <div className="p-6 bg-[#ded8ff]/60 rounded-3xl backdrop-blur-[2px] inline-flex justify-start items-center gap-3">
              <div className="text-center justify-start text-[#5b43dd] text-4xl font-bold font-['Space_Grotesk'] capitalize">500+</div>
              <div className="justify-start text-[#5b43dd] text-2xl font-normal font-['Space_Grotesk'] uppercase tracking-wide">Screens<br/>Designed</div>
            </div>

            <div className="p-6 bg-[#ded8ff]/60 rounded-3xl backdrop-blur-[2px] inline-flex justify-start items-center gap-3">
              <div className="text-center justify-start text-[#5b43dd] text-4xl font-bold font-['Space_Grotesk'] capitalize">500+</div>
              <div className="justify-start text-[#5b43dd] text-2xl font-normal font-['Space_Grotesk'] uppercase tracking-wide">Screens<br/>Designed</div>
            </div>
          </div> 
        </div>      
      </section>
    </div>
  );
}
