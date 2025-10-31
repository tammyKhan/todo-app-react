import React from "react";

const TaskActionsBar = ({
  allSelected,
  handleSelectAll,
  handleClearComplete,
  search,
  setSearch,
}) => {
  return (
    <div className="flex justify-between md:justify-end items-center">
      {/*  Search small device */}
      <div className="w-2/5">
        <input
          type="text"
          placeholder="search tasks here.."
          className="bg-transparent placeholder:text-xs md:hidden w-full placeholder:text-[#839FEE] text-white border-2 pb-1 px-2 focus:ring-2 focus:ring-white outline-none rounded-3xl border-[#839FEE]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex gap-2">
        {/*  Select All / Unselect All */}
        <button
          onClick={handleSelectAll}
          className="px-2 py-1 md:px-4 md:py-1 md:text-base text-xs font-semibold text-[#EB03FF] rounded-3xl border-2 border-[#EB03FF] hover:text-opacity-65"
        >
          {allSelected ? "Unselect All" : "Select All"}
        </button>

        {/* 🗑️ Clear Complete */}
        <button
          onClick={handleClearComplete}
          className="px-2 p-1 md:px-4 md:py-1 md:text-base text-xs font-semibold text-[#FF5730] border-2 border-[#FF5730] rounded-3xl hover:text-opacity-65"
        >
          Clear Complete
        </button>
      </div>
    </div>
  );
};

export default TaskActionsBar;
