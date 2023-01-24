import React, { useState } from 'react';
import './css/TodoApp.css';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentTask) {
      return;
    }
    setTasks([...tasks, currentTask]);
    setCurrentTask('');
  }

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentTask}
          onChange={e => setCurrentTask(e.target.value)}
          placeholder="Add a task"
        />
        <button type="submit">Add Task</button>
      </form>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;