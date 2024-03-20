const Hero = () => {
  return (
    <header className="flex flex-col items-center justify-center h-screen bg-cover bckg-fundamental header">
      <h1
        className="
            leading-tight 
            text-5xl 
            lg:text-[90px] 
            xl:text-[120px] 
            2xl:text-[140px] 
            xl:max-w-8xl 
            2xl:max-w-8xl 
            font-bold 
            text-center 
            text-[#ffffffd9] 
            lg:space-x-7 
            hover:blur-sm 
            transition-all duration-300"
      >
        Unveiling Digital Stories from Blur
      </h1>
      <p className="text-[#ffffffd9] text-xl mt-5 px-5 flex flex-col text-center">
        <span>
          JavaScript developer and UX/UI enthusiast, blurring the lines between
          code and design.
        </span>
        <span>
          Eager to contribute to innovative projects that push boundaries.
        </span>
      </p>
    </header>
  );
};

export default Hero;
