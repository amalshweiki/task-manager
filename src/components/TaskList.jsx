import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Task from "./Task";
import NotFounds from "./NotFounds";
const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <>
      <h1 className="text-center">All Tasks</h1>
      <ul className="list-unstyled p-4 m-3 rounded border  border-info">
        {tasks.length ? (
          tasks.map((item, index) => {
            return <Task item={item} key={index} />;
          })
        ) : (
          <NotFounds />
        )}
      </ul>
    </>
  );
};

export default TaskList;
