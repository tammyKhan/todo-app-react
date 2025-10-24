import React from 'react';

const FilterButton = ({ title, icon: Icon,  count, active, onClick }) => {
  return (
     <div
      onClick={onClick}
      className={`bg-[#1F0356] cursor-pointer hover:bg-opacity-50 py-3 px-2 md:py-4 md:px-5  flex flex-col md:flex-row items-center  gap-2 md:gap-3 rounded-2xl
      ${active ? "ring-2 ring-[#1F0356] bg-[#839FEE]" : ""}`}
    >
      <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#344FA1] flex items-center justify-center">
        <Icon className="text-white"/>
      </div>
      <div className="text-white space-y-2">
        <h3 className="lg:text-xl md:text-lg text-base font-bold">{title}</h3>
        <p className="text-sm text-white text-center md:text-start">
          {count} tasks
        </p>
      </div>
    </div>
  );
};

export default FilterButton;