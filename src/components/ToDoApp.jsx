import React, { useState } from 'react';
import './ToDoApp.css'; 

function ToDoApp() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTaskList([...taskList, { text: task, completed: false }]);
      setTask(''); 
    }
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...taskList];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTaskList(updatedTasks);
  };

  return (
    <div className="todo-container">
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Enter task..." 
        onKeyPress={(e) => { if (e.key === 'Enter') handleAddTask(); }}
        className="input-field"
      />
      <button className="add-button" onClick={handleAddTask}>Add Task</button>
      <ul className="task-list">
        {taskList.map((taskItem, index) => (
          <li key={index} className={taskItem.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={taskItem.completed}
              onChange={() => toggleComplete(index)}
            />
            {taskItem.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
