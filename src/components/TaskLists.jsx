import TaskCard from "./TaskCard";

function TaskLists({tasks}) {
  if (tasks.length === 0) {
    return <h1>Empty</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key = {task.id} task = {task}/>
      ))}
    </div>
  );
}

export default TaskLists;
