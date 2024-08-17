import React from "react";

const HomePageShimmerEffect = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-md:gap-4 w-[90%] mx-auto justify-items-center">
      {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
        <div
          key={index}
          className="relative w-[320px] h-[400px] rounded-lg overflow-hidden shadow-lg bg-gray-200 mb-5"
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
          {/* Placeholder Content */}
          <div className="w-full h-full flex flex-col items-center justify-center p-4">
            <div className="w-3/4 h-2 bg-gray-300 rounded mb-4 animate-shimmer"></div>
            <div className="w-1/2 h-2 bg-gray-300 rounded mb-4 animate-shimmer"></div>
            <div className="w-full h-3/4 bg-gray-300 rounded animate-shimmer"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePageShimmerEffect;
