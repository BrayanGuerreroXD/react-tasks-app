import { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title: title,
      description: description,
    });
    setTitle('')
    setDescription('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add task"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        placeholder="Task description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>
      <button>Save</button>
    </form>
  );
}

export default TaskForm;
