import { useState } from "react";

function TaskForm() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add task"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button>Save</button>
    </form>
  );
}

export default TaskForm;
