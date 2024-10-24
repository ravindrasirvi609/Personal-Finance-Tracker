import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/logo.png"
            alt="App Logo"
            className="h-16 mb-4"
            width={100}
            height={150}
          />
          <h1 className="text-4xl font-bold mb-4">
            Your Personal Budgeting Companion
          </h1>
          <p className="text-xl mb-8">
            Take control of your finances, one transaction at a time.
          </p>
          <div className="space-x-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Get Started for Free
            </button>
            <button className="bg-transparent hover:bg-white hover:text-blue-500 text-white font-semibold py-2 px-4 border border-white rounded">
              Log In
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/app-mockup.webp"
            alt="App Interface Mockup"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
