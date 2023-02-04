import TaskList from "./components/TaskLists";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./data/tasks";
import {useState, useEffect} from 'react'

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([...tasks, {
      id: tasks.length,
      title: task.title,
      description: task.description
    }])
  }

  function deleteTasks(taskId) {
    setTasks(tasks.filter(task => task.id != taskId))
  }

  return (
    <div>
      <TaskForm createTask = {createTask}/>
      <TaskList tasks = {tasks} deleteTasks = {deleteTasks}/>
    </div>
  );
}

export default App;
