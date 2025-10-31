import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import AddTaskModal from './components/AddTaskModal';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });
   
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const taskCounts = {
    all: tasks.length,
    inProcess: tasks.filter((t) => !t.completed).length,
    completed: tasks.filter((t) => t.completed).length,
  }

    // filtered tasks
  const filteredTasks = tasks.filter((t) => {
    if(activeFilter === "all") return true;
    if(activeFilter === "inProcess") return !t.completed;
    if(activeFilter === "completed") return t.completed;
    return true;
  })

  return (
    <div className='py-3 w-11/12 mx-auto  relative '>
          <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
       <Header  />
       <div className='border border-[#839FEE] my-5'></div>
       <FilterBar 
       activeFilter={activeFilter}
       setActiveFilter={setActiveFilter}
       taskCounts={taskCounts} />
       <AddTaskModal 
        tasks={filteredTasks}
        setTasks={setTasks}   
       />
    </div>
  );
};

export default App;