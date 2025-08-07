import MintButton from "./mint-button";
import Stats from "./stats";

const Hero = () => {
  return (
    <section className="relative z-0 container mx-auto px-4 h-[calc(100vh-80px)] flex flex-col justify-center items-top overflow-hidden">
      {/* Main Content Section */}
      <div className="mx-auto flex flex-col items-center flex-grow justify-center">
        {/* Hero Content Group - Packed closely together */}
        <div className="flex flex-col items-center mb-10">
          {/* Hero Title */}
          <h1 className="text-center text-[#7159f3] text-3xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-[80px] mb-4 px-4">
            <div className="mb-2">BUILD DIFFERENT.</div>
            <div>SCALE FASTER.</div>
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

        {/* Stats Section */}
        <Stats />
      </div>
    </section>
  );
};

export default Hero;
