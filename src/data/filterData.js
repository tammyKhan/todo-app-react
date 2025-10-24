import { FaCheck, FaGears, FaListCheck } from "react-icons/fa6";

export const filterItems = [
  {
    key: "all",
    title: "All Tasks",
    icon: FaListCheck,
  },
  {
    key: "inProcess",
    title: "In Process",
    icon: FaGears,
  },
  {
    key: "completed",
    title: "Completed",
    icon: FaCheck,
  },
];
