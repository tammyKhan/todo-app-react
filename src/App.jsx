import React from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import AddTaskModal from './components/AddTaskModal';

const App = () => {
  const taskCounts = {
    all: 24,
    inProcess: 7,
    completed: 17,
  }

  return (
    <div className='py-3 w-11/12 mx-auto  relative '>
       <Header  />
       <div className='border border-[#839FEE] my-5'></div>
       <FilterBar taskCounts={taskCounts} />
       <AddTaskModal/>
    </div>
  );
};

export default App;