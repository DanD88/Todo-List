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
      <h1>TODO List</h1>
      <form className='form-section' onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentTask}
          onChange={e => setCurrentTask(e.target.value)}
          placeholder="Add a task"
        />
        <button className='submit' type="submit">Add Task</button>
      </form>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button className='delete-btn' onClick={() => handleDelete(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default TodoApp;