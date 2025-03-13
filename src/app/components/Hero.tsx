import MintButton from "./MintButton";

const Hero = () => {
  return (
    <section className="relative z-0 container mx-auto px-4 h-screen flex flex-col justify-center items-top overflow-hidden">
      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto flex flex-col items-center flex-grow justify-center">
        {/* Hero Content Group - Packed closely together */}
        <div className="flex flex-col items-center mb-0">
          {/* Hero Title */}
          <h1 className="text-center text-[#7159f3] text-4xl md:text-5xl lg:text-7xl font-bold leading-tight md:leading-[80px] mb-4 px-4">
            <div className="mb-2">BASED DESIGN FOR</div>
            <div>A TOKENIZED WORLD</div>
          </h1>

          {/* Subtitle - Reduced spacing */}
          <p className="text-center text-[#373737] text-2xl md:text-3xl lg:text-4xl font-bold px-4 mb-8">
            NO CAP. NO MID. JUST VIBES.
          </p>
          
          {/* Button - Closer to the text */}
          <div className="w-full flex justify-center">
            <MintButton />
          </div>
        </div>

        {/* Stats Section - More spacing from above content */}
        <div className="w-full flex justify-center mt-18 mb-16">
          <div className="w-full md:w-[80vw] lg:w-[60vw] max-w-full flex flex-col md:flex-row justify-between gap-6 px-4">
            {/* Unique stats with custom copy */}
            <div className="p-4 md:p-6 bg-[#ded8ff]/60 rounded-3xl backdrop-blur-[2px] flex justify-start items-center gap-3 w-full md:w-auto">
              <div className="text-center text-[#5b43dd] text-3xl md:text-4xl font-bold capitalize">500+</div>
              <div className="text-[#5b43dd] text-xl md:text-2xl font-normal uppercase tracking-wide">
                Screens<br/>Designed
              </div>
            </div>
            
            <div className="p-4 md:p-6 bg-[#ded8ff]/60 rounded-3xl backdrop-blur-[2px] flex justify-start items-center gap-3 w-full md:w-auto">
              <div className="text-center text-[#5b43dd] text-3xl md:text-4xl font-bold capitalize">5+</div>
              <div className="text-[#5b43dd] text-xl md:text-2xl font-normal uppercase tracking-wide">
                Clients &<br/>Partnership
              </div>
            </div>
            
            <div className="p-4 md:p-6 bg-[#ded8ff]/60 rounded-3xl backdrop-blur-[2px] flex justify-start items-center gap-3 w-full md:w-auto">
              <div className="text-center text-[#5b43dd] text-3xl md:text-4xl font-bold capitalize">20+</div>
              <div className="text-[#5b43dd] text-xl md:text-2xl font-normal uppercase tracking-wide">
                Projects<br/>Delivered
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;