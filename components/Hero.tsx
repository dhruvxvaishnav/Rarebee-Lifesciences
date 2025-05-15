import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-rarebee-primary px-4 pt-20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Innovating Healthcare,
            <br />
            Transforming Lives
          </h1>
          <p className="text-lg md:text-xl text-rarebee-text mb-8">
            Rarebee LifeSciences is pioneering the future of pharmaceutical
            innovation through cutting-edge research and development.
          </p>
          <button className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
