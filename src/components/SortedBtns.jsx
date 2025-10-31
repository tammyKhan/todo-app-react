import React from 'react';

const SortedBtns = ( {sortType, setSortType} ) => {
  return (
    <div className="md:w-2/3  flex gap-3 md:gap-8 items-center">
         <h3 className="lg:text-xl md:text-lg text-base font-bold text-white">Sort :-</h3>
         <div className="border-2 border-[#839FEE] rounded-3xl">
            <button  onClick={() => setSortType("created")} className={`${sortType === "created" ? "bg-[#EB03FF]" : ""} transition-all duration-300 ease-in-out px-2 md:px-4 lg:px-8 py-2 font-semibold text-white rounded-3xl hover:text-opacity-65 text-xs md:text-base`}>Created</button>
            <button  onClick={() => setSortType("priority")} className={`${sortType === "priority" ? "bg-[#EB03FF]" : ""} transition-all duration-300 ease-in-out px-2 md:px-4 lg:px-8 py-2 font-semibold text-white rounded-3xl hover:text-opacity-65 text-xs md:text-base`}>Priority</button>
            <button  onClick={() => setSortType("dueDate")} className={`${sortType === "dueDate" ? "bg-[#EB03FF]" : ""} transition-all duration-300 ease-in-out px-2 md:px-4 lg:px-8 py-2 font-semibold text-white rounded-3xl hover:text-opacity-65 text-xs md:text-base`}>Due Date</button>
            <button  onClick={() => setSortType("az")} className={`${sortType === "az" ? "bg-[#EB03FF]" : ""} transition-all duration-300 ease-in-out px-2 md:px-4 lg:px-8 py-2 font-semibold text-white rounded-3xl hover:text-opacity-65 text-xs md:text-base`}>A - Z</button>
         </div>
      </div>
  );
};

export default SortedBtns;