import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NewTask from "./components/NewTask";
import TaskDetail from "./components/TaskDetail";
import { TaskProvider } from "./Context/TaskContext";

const App = () => (
  <TaskProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-task" element={<NewTask />} />
      <Route path="/task/:id" element={<TaskDetail />} />
    </Routes>
  </TaskProvider>
);

export default App;
