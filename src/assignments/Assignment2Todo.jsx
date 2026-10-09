import { useState } from "react";

function Assignment2Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((item) => item.id !== id));
  }

  return (
    <div className="assignment-container">
      <h2>Assignment 2: To-Do List</h2>

      <p className="assignment-description">
        Interactive To-Do List to add, complete and delete tasks dynamically.
      </p>

      <div className="todo-container">
        <div className="todo-input">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
          />

          <button onClick={addTask}>Add Task</button>
        </div>

        <div className="task-list">
          {tasks.length === 0 ? (
            <p>No tasks added yet.</p>
          ) : (
            tasks.map((item) => (
              <div
                key={item.id}
                className={`task-item ${
                  item.completed ? "completed" : ""
                }`}
              >
                <span>{item.text}</span>

                <div>
                  <button onClick={() => toggleTask(item.id)}>
                    {item.completed ? "Undo" : "Complete"}
                  </button>

                  <button onClick={() => deleteTask(item.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Assignment2Todo;