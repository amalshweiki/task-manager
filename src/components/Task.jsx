import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Task = ({ item }) => {
  const { removeItem } = useContext(TaskContext);
  return (
    <li className="border p-3">
      {item.title}
      <button
        className="btn btn-danger float-end me-2"
        onClick={() => removeItem(item.id)}
      >
        Delete
      </button>
      <button className="btn btn-info float-end me-2">Edit</button>
    </li>
  );
};

export default Task;
