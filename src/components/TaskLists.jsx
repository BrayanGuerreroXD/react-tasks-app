import TaskCard from "./TaskCard";

function TaskLists({tasks, deleteTasks}) {
  if (tasks.length === 0) {
    return <h1>Empty</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key = {task.id} task = {task} deleteTasks = {deleteTasks}/>
      ))}
    </div>
  );
}

export default TaskLists;
