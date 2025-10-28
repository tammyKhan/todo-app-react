import React from 'react';
import { BiSolidEdit } from 'react-icons/bi';
import { FaTrash } from 'react-icons/fa6';

const TaskList = ({task, handleDelete}) => {
  return (
          <div className="flex bg-[#1F0356] p-3 rounded-3xl">
         
              <input type="checkbox"
              className="mx-4 mt-1 cursor-pointer h-5 w-5 border-2 border-[#839FEE] hover:border-opacity-65 rounded appearance-none bg-transparent checked:bg-[#94D09F]" />
            <div className="w-full">
          
              <h3 className="text-base  font-bold text-white">{task.title}</h3>
              <div className="flex justify-between w-full">
               <div className="flex flex-col md:flex-row gap-3 md:items-center mt-2 text-[#839FEE]">
                <span className="text-sm">Added: <span className="createdAt"> {new Date(task.createdAt).toLocaleString()}</span></span>
              
                 <span className="due px-2 md:px-3 py-1 text-xs font-medium text-[#94D09F] rounded-3xl border-2 border-[#94D09F] text-center ">Deadline: <span className="dueDate">{task.dueDate || "No date"}</span></span>
                <span className="priority px-2 md:px-3 py-1 text-xs font-medium text-[#EB03FF] rounded-3xl border-2 border-[#EB03FF]  text-center">{task.priority}</span>
              </div>
              
              <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center justify-end mx-4 md:mx-8">
            <BiSolidEdit className="text-[#BFAF1C] text-2xl cursor-pointer hover:text-opacity-65 edit-icon" />
            <FaTrash onClick={() => handleDelete(task.id)} className="text-[#FF5730] text-xl cursor-pointer hover:text-opacity-65 delete-icon" />
          </div>
              </div>
              
            </div>

          
        </div>
  );
};

export default TaskList;