function TaskCard({ task, deleteTasks }) {
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTasks(task.id)}>Delete</button>
    </div>
  );
}

export default TaskCard;
