const statsData = [
  {
    id: 1,
    number: "500+",
    title: "Screens",
    subtitle: "Designed",
  },
  {
    id: 2,
    number: "5+",
    title: "Clients &",
    subtitle: "Partnership",
  },
  {
    id: 3,
    number: "20+",
    title: "Projects",
    subtitle: "Delivered",
  },
];

const Stats = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className="py-3 px-6 sm:p-8 bg-[#ded8ff]/60 rounded-3xl backdrop-blur-[2px] border border-[#ded8ff]/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6">
                <div className="text-[#5b43dd] text-3xl md:text-2xl lg:text-3xl xl:text-5xl font-bold">
                  {stat.number}
                </div>
                <div className="text-[#5b43dd]  text-sm lg:text-xl xl:text-2xl font-semibold uppercase tracking-wide leading-tight">
                  <span className="mr-1">{stat.title}</span>
                  <br className="hidden md:inline" />
                  {stat.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
