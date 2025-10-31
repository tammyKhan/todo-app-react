import React, { useState } from 'react';
import { filterItems } from '../data/filterData'
import FilterButton from './FilterButton';

const FilterBar = ({ activeFilter, setActiveFilter, taskCounts }) => {
  
  return (
    <div className='grid grid-cols-3 gap-2  md:gap-6 '>
       {
        filterItems.map((item) => (
        <FilterButton
        key={item.key}
        title={item.title}
        icon={item.icon}
        count={taskCounts[item.key] || 0}
        active={activeFilter === item.key}
        onClick={() => setActiveFilter(item.key)}
        />
        ))
       }
    </div>
  );
};

export default FilterBar;