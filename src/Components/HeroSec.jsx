import React from "react";

const HeroSec = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        {/* SVG icon */}
        <span>
          <svg
            width="100%"
            height="100%"
            viewBox="-10.5 -9.45 21 18.9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="uwu-hidden mt-4 mb-3 text-brand w-32 lg:w-36 self-center text-sm me-0 flex origin-center transition-all ease-in-out text-cyan-500"
          >
            <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <ellipse rx="10" ry="4.5"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
            </g>
          </svg>
        </span>

        {/* Heading and description */}
        <div className="flex flex-col items-center justify-center mb-4">
          <h1 className="text-center text-5xl font-medium mb-4">React</h1>
          <div className="text-center text-3xl font-medium text-gray-600">
            <p>The library for web and native user interfaces</p>
          </div>
        </div>

        {/* Buttons - centered row */}
        <div className="flex justify-center gap-4 mb-9">
          <button className=" bg-cyan-500 rounded-full px-8 py-3 text-gray-100 font-medium text-lg">
            Learn React
          </button>
          <button className="border border-gray-500 rounded-full px-8 py-3 font-medium text-lg ">
            API Reference
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;