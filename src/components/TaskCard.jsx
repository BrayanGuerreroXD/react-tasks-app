import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTasks } = useContext(TaskContext);

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTasks(task.id)}>Delete</button>
    </div>
  );
}

export default TaskCard;
