import MintButton from "./MintButton";

const Hero = () => {
  return (
    <section className="relative z-0 container mx-auto px-4 h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto flex flex-col items-center flex-grow justify-center gap-[72px]">
        {/* Hero Content */}
        <div className="flex flex-col items-center">
          {/* Hero Title */}
          <h1 className="text-center text-[#7159f3] text-4xl md:text-5xl lg:text-7xl font-bold leading-tight md:leading-[80px] mb-5 px-4">
            <div className="mb-2">BASED DESIGN FOR</div>
            <div>A TOKENIZED WORLD</div>
          </h1>

          {/* Subtitle */}
          <p className="text-center text-[#373737] text-2xl md:text-3xl lg:text-4xl font-bold px-4">
            NO CAP. NO MID. JUST VIBES.
          </p>
        </div>

        {/* Button with 72px spacing */}
        <div className="w-full flex justify-center">
          <MintButton />
        </div>

        {/* Stats Section with 72px spacing */}
        <div className="w-full flex justify-center mb-16">
          <div className="w-full md:w-[80vw] lg:w-[60vw] max-w-full flex flex-col md:flex-row justify-between gap-6 px-4">
            {/* Unique stats with custom copy */}
            <div className="p-4 md:p-6 bg-[#ded8ff]/60 rounded-3xl backdrop-blur-[2px] flex justify-start items-center gap-3 w-full md:w-auto">
              <div className="text-center text-[#5b43dd] text-3xl md:text-4xl font-bold capitalize">500+</div>
              <div className="text-[#5b43dd] text-xl md:text-2xl font-normal uppercase tracking-wide">
                Screens<br/>Designed
              </div>
            </div>
            
            <div className="p-4 md:p-6 bg-[#ded8ff]/60 rounded-3xl backdrop-blur-[2px] flex justify-start items-center gap-3 w-full md:w-auto">
              <div className="text-center text-[#5b43dd] text-3xl md:text-4xl font-bold capitalize">100K</div>
              <div className="text-[#5b43dd] text-xl md:text-2xl font-normal uppercase tracking-wide">
                Daily<br/>Users
              </div>
            </div>
            
            <div className="p-4 md:p-6 bg-[#ded8ff]/60 rounded-3xl backdrop-blur-[2px] flex justify-start items-center gap-3 w-full md:w-auto">
              <div className="text-center text-[#5b43dd] text-3xl md:text-4xl font-bold capitalize">$2.5M</div>
              <div className="text-[#5b43dd] text-xl md:text-2xl font-normal uppercase tracking-wide">
                Total<br/>Volume
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;