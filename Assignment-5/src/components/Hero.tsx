import Banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div>

      <div className="flex container mx-auto mt-35 ml-28">

        <div className="container mx-auto">

          <div className="mb-6">
            <h1 className="font-bold text-6xl text-emerald-950">
              Build Your Ideal
            </h1>

            <h1 className="font-bold text-6xl bg-gradient-to-r from-pink-500 to-yellow-700 bg-clip-text text-transparent">
              Development Stack
            </h1>
          </div>

          <div className="mb-12 text-green-900 font-semibold text-xl">
            <p>
              Explore frontend, backend, database, and tooling options,
              <br />
              compare them side by side, and put together the stack that fits
              <br />
              your next project.
            </p>
          </div>

          <div className="flex gap-20">
            <button className="px-5 py-2 rounded-md bg-gradient-to-r from-cyan-700 to-purple-700 text-white">
              Explore technologies
            </button>

            <button className="px-8 py-2 border border-amber-200">
              Learn more
            </button>
          </div>

        </div>

        {/* Image */}
        <div className="mr-30 w-[520px] shrink-0 -mt-15">
          <img className="w-full" src={Banner} alt="" />
        </div>

      </div>

    </div>
  );
};

export default Hero;