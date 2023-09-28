import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

import { TaskContextProvider } from "./context/TaskContext";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <TaskContextProvider>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <Routes>
                <Route exact path="/" Component={TaskList} />
                <Route exact path="/add-task" Component={AddTask} />
              </Routes>
            </div>
          </div>
        </div>
      </TaskContextProvider>
    </BrowserRouter>
  );
}

export default App;
