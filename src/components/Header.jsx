import React, { useEffect, useState } from 'react';
import logo from "../assets/todo-logo.svg"
import { IoMdMoon } from 'react-icons/io';
import { IoSunny } from 'react-icons/io5';


const Header = () => {

   const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    console.log("Dark mode:", darkMode);
     if(darkMode){
      root.classList.add("dark");
      localStorage.setItem("theme", "dark")
     } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light")
     }
  }, [darkMode])


  return (
    <nav className="flex justify-between items-center">
        <img className='w-36 md:w-40 ' src={logo} alt="BriskTodo" />

         {/* Theme Toggle Button */}
     <div onClick={() => setDarkMode(!darkMode) }
       className='w-16 h-8 rounded-full bg-blue-400 hover:bg-opacity-50  flex justify-center items-center  cursor-pointer  '>
        {/* sun icon */}
      <div className={`text-white  w-8 h-8 flex justify-center items-center  rounded-full transition-all duration-150 ${!darkMode ? 'bg-blue-800 border-2 border-blue-400' : 'bg-transparent' }`}>
         <IoSunny className='w-4 h-5'/>
        </div>
        
        {/* moon icon */}
        <div className={`text-white w-8 h-8 flex justify-center items-center  rounded-full transition-all duration-150 ${darkMode ? 'bg-blue-800 border-2 border-blue-400' : 'bg-transparent' } `}>
         <IoMdMoon className='w-4 h-5'/>
        </div>
      </div>
    
      </nav>
  );
};

export default Header;