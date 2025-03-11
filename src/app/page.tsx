import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white px-[40px]">      {/* Fixed Background Image */}
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

          <button className="pt-14"> 
          <div className="w-[179px] h-10 pb-px bg-[#5b43dd] rounded-[100px] shadow-[0px_0px_18.100000381469727px_0px_rgba(117,90,255,1.00)] outline-1 outline-[#5b43dd] inline-flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch h-10 flex-1 p-4 bg-[#8a76f3] rounded-[100px] shadow-[inset_0px_-1px_5.099999904632568px_0px_rgba(114,89,243,0.06)] shadow-[inset_0px_1px_0.5px_0px_rgba(216,197,255,0.29)] inline-flex justify-center items-center gap-2.5">
              <div className="justify-start text-[#faf9fe] text-base font-bold font-['Space_Grotesk']">Mint your Project</div>
            </div>
          </div>
          </button>
          
        </div>
      </section>
    </div>
  );
}
