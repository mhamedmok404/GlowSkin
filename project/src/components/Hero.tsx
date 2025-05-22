import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-pink-50 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <span className="inline-block px-4 py-1 mb-4 bg-pink-100 text-pink-700 rounded-full text-sm tracking-wider">
              TOP BRANDS
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
              Spotless Beauty For Your Healthy Skin
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg">
              Our premium cosmetic campaign has been observed on aluminum alloys used in the aircraft, building, and packaging industries.
            </p>
            <div className="flex space-x-4">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md transition-colors duration-300 font-medium">
                Shop Now
              </button>
              <button className="border border-gray-300 hover:border-pink-500 hover:text-pink-500 px-6 py-3 rounded-md transition-colors duration-300 font-medium">
                Read More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src="https://images.pexels.com/photos/2402861/pexels-photo-2402861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Beauty Model" 
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-40 left-40 w-24 h-24 bg-pink-100 rounded-full blur-2xl opacity-50"></div>
    </div>
  );
};

export default Hero;