import { createContext, useState } from "react";
export const TaskContext = createContext();
const initaialState = [
  { title: "First Task", id: 1 },
  { title: "Second Task", id: 2 },
  { title: "Third Task", id: 3 },
];
export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState(initaialState);
  const removeItem = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  return (
    <TaskContext.Provider value={{ tasks, removeItem, addTask }}>
      {props.children}
    </TaskContext.Provider>
  );
};
