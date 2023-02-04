import TaskList from "./TaskLists";
import TaskForm from "./TaskForm";
import { tasks as data } from "./tasks";
import {useState, useEffect} from 'react'

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(taskTitle) {
    setTasks([...tasks, {
      id: tasks.length,
      title: taskTitle,
      description: taskTitle
    }])
  }

  return (
    <div>
      <TaskForm createTask = {createTask}/>
      <TaskList tasks = {tasks}/>
    </div>
  );
}

export default App;
