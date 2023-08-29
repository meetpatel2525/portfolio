import React from 'react';

const PortfolioItem = ({ imageSrc, skillName }) => {
  return (
    <div className="bg-gradient-to-br from-[#d0d1d1] via-white to-[#d2d5d5] max-w-xs rounded overflow-hidden shadow-2xl text-center py-2">
      <div className="flex justify-center items-center">
        <img className="w-16 h-16" src={imageSrc} alt={skillName} />
      </div>
      <div className="px-6 py-2">
        <div className="font-semibold text-base text-gray-400">{skillName}</div>
      </div>
    </div>
  );
};

export default PortfolioItem;
