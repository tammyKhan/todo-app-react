import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import TaskList from "./TaskList";
import SortedBtns from "./SortedBtns";

const AddTaskModal = ({ tasks, setTasks }) => {
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState({
    title: "",
    priority: "High",
    dueDate: "",
  });

  const [sortType, setSortType] = useState("created");
  const [search, setSearch] = useState("")
  
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);

  // handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setTask((prev) => ({ ...prev, [id]: value }));
  };

  // handle task Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.title.trim()) {
      alert("Title cannot be empty or spaces only!");
      return;
    }

    const isDuplicate = tasks.some(
      (t) => t.title.trim().toLowerCase() === task.title.trim().toLowerCase() &&
      t.id !== editTaskId
    );

    if (isDuplicate) {
      alert("A task with this title already exists!");
      return;
    }

    if(isEditing) {
      // edit mode
      const updatedTasks = tasks.map((t) => 
        t.id === editTaskId ? {...t, ...task, title: task.title.trim()} : t );
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      alert("Task updated successfully!");
    } else {
      // create mode
    const newTask = {
      id: crypto.randomUUID(),
      title: task.title,
      priority: task.priority,
      dueDate: task.dueDate,
      createdAt: new Date().toISOString(),
      completed: false
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    alert("Task Saved Successfully");
    }

    // reset
    setShowModal(false);
    setTask({ title: "", priority: "High", dueDate: "" });
    setIsEditing(false);
    setEditTaskId(null);
  };

  // delete functionality
  const handleDelete = (id) => {
    console.log(id);
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // edit functionality
  const handleEdit = (id) => {
    const taskToEdit = tasks.find((t) => t.id === id);
    if(taskToEdit) {
      setTask(taskToEdit);
      setIsEditing(true);
      setEditTaskId(id);
      setShowModal(true);
    }
  }

  // checked complete
  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((t) => 
    t.id === id ? {...t, completed: !t.completed} : t
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  // sort logic
  const sortedTasks = [...tasks].sort((a, b) => {
    if(sortType === "created"){
      return new Date(a.createdAt) - new Date(b.createdAt)
    }
    if(sortType === "priority"){
      const order = { "High": 1, "Medium": 2, "Low": 3 }
      return order[a.priority] - order[b.priority]
    }
    if(sortType === "dueDate"){
      if(!a.dueDate) return 1;
      if(!b.dueDate) return -1;
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
    if(sortType === "az"){
      return a.title.localeCompare(b.title);
    }
    return 0;
  })

  // search filter 
  const searchedTasks = [...sortedTasks].filter((t) => 
    t.title.toLowerCase().includes(search.toLowerCase().trim())
  )

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

      <div className="flex gap-2 justify-between sm:justify-center sm:gap-10 mt-11  items-center">
      <SortedBtns sortType={sortType} setSortType={setSortType} />
       <div className="w-1/3">
        <input type="text"
        placeholder="search tasks here"
        value={search} onChange={(e) => setSearch(e.target.value)}
        className="bg-transparent w-full placeholder:text-[#839FEE] text-white border-2 p-1 px-2 focus:ring-2 focus:ring-white outline-none rounded-3xl border-[#839FEE]"
        />
       </div>
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
                {isEditing ? "Update" : "Save" }
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Task List */}
      <div className="mt-8 space-y-3">
        {searchedTasks.length === 0 ? (
          <p className="text-center text-white text-2xl mt-16">No tasks Found</p>
        ) : (
          searchedTasks.map((t) => 
          <TaskList
           key={t.id} 
           task={t} 
           handleDelete={handleDelete}
           handleEdit={handleEdit}
           handleToggleComplete={handleToggleComplete}
           />)
        )}
      </div>
    </>
  );
};

export default AddTaskModal;
