import React from "react";

export default function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <div className="border-2 border-black rounded-md overflow-hidden">
      <img
        src={imgUrl}
        alt="portfolio img"
        className="w-full h-36 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:trext-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold border-4 border-double border-violet-600 rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
