import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const AddTask = () => {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title: title, id: Math.floor(Math.random() * 100000) });
    setTitle("");
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <form className="border border-info p-3 my-4 " onSubmit={handleSubmit}>
      <h1 className="text-center display-4">Add New Task</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={title}
          placeholder="Type Title of Task"
        />
      </div>
      <div className="text-center">
        <button type="submit" className="btn  btn-info btn-lg ">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddTask;
