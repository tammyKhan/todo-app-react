import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import TaskList from "./TaskList";

const AddTaskModal = () => {
  const [showModal, setShowModal] = useState(false);
 const [task, setTask] = useState({
    title: "",
    priority: "High",
    dueDate: "",
  });
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  } ,[])

  const handleChange = (e) => {
    const { id, value } = e.target;
    setTask((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.title.trim()) {
      alert("Title cannot be empty or spaces only!");
      return;
    }

    const isDuplicate = tasks.some(
      (t) => t.title.trim().toLowerCase() === task.title.trim().toLowerCase()
    )

    if(isDuplicate) {
      alert("This Title already exists!")
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      title: task.title,
      priority: task.priority,
      dueDate: task.dueDate
    }

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    alert("Task Saved Successfully")

    setShowModal(false)
    setTask({ title: "", priority: "High", dueDate: "" });
  };

  return (
    <>
      {/* Add task btn */}
      <div
        onClick={() => setShowModal(true)}
        title="Add task"
        className="fixed right-7 bottom-10 w-12 h-12 rounded-full  bg-[#EB03FF] flex justify-center items-center cursor-pointer hover:bg-opacity-65"
      >
        <FaPlus className="text-white" />
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-[#344FA1] dark:bg-black rounded-lg shadow-lg w-80 md:w-96 p-4 md:p-6 space-y-6"
          >
            <input
              id="title"
              type="text"
              value={task.title}
              onChange={handleChange}
              placeholder="Write your task here"
              className="bg-transparent w-full placeholder:text-[#839FEE] text-white border-2 p-1 px-2 focus:ring-2 focus:ring-white outline-none rounded-3xl border-[#839FEE]"
            />

            <div className="flex justify-between items-center gap-3">
              <div className="w-full">
                <label className="text-base font-semibold text-white block mb-2">
                  Priority :-
                </label>
                <select
                  id="priority"
                  value={task.priority}
                  onChange={handleChange}
                  className="bg-transparent w-full text-white font-semibold border-2 p-1 px-2 focus:ring-2 focus:ring-white outline-none rounded-3xl border-[#839FEE] cursor-pointer"
                >
                  <option className="text-black" value="High">
                    High
                  </option>
                  <option className="text-black" value="Medium">
                    Medium
                  </option>
                  <option className="text-black" value="Low">
                    Low
                  </option>
                </select>
              </div>
              <div className="w-full">
                <label className="text-base font-semibold text-white block mb-2">
                  Due Date :-
                </label>
                <input
                  type="date"
                  id="dueDate"
                  value={task.dueDate}
                  onChange={handleChange}
                  className="bg-transparent w-full placeholder:text-white text-white font-semibold border-2 p-1 px-2 focus:ring-2 focus:ring-white outline-none rounded-3xl border-[#839FEE] cursor-pointer"
                />
              </div>
            </div>

            <div className="flex justify-end items-center gap-2">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-1 font-semibold text-[#EB03FF] rounded-3xl border-2 border-[#EB03FF] hover:text-opacity-65"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1 font-semibold text-white bg-[#EB03FF] border-2 border-[#EB03FF] rounded-3xl hover:text-opacity-65"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Task List */}
      <div className="mt-12 space-y-3">
         {
          tasks.length === 0 ? (
         <p className="text-center">No Tasks Yet</p>
          ) : (
         tasks.map((t) => (
          <TaskList key={t.id} task={t} />
         ))
          )
         }
      </div>
    </>
  );
};

export default AddTaskModal;
