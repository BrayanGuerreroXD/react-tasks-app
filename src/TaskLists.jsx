function TaskLists({tasks}) {
  if (tasks.length === 0) {
    return <h1>Empty</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskLists;
