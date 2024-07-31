import React, { useState } from 'react';

const TaskItem = ({ task, onToggleComplete, onEditTask }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-header" onClick={handleToggle}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />
        <span className="task-title">{task.title}</span>
      </div>
      {isExpanded && (
        <div className="task-details">
          <p>{task.description}</p>
          <small>Last Updated: {new Date(task.lastUpdated).toLocaleString()}</small>
          <button onClick={() => onEditTask(task.id)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;