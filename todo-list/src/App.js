import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import SearchBar from './components/SearchBar';
import './styles.css';

import tasksData from './data/tasks.json';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  const addTask = (task) => {
    const newTask = {
      id: tasks.length + 1,
      title: task.title,
      description: task.description,
      completed: false,
      lastUpdated: new Date().toISOString()
    };
    setTasks([...tasks, newTask]);
  };

  const editTask = (updatedTask) => {
    const updatedTasks = tasks.map(task =>
      task.id === updatedTask.id ? { ...task, ...updatedTask, lastUpdated: new Date().toISOString() } : task
    );
    setTasks(updatedTasks);
    setTaskToEdit(null);
  };

  const onToggleComplete = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed, lastUpdated: new Date().toISOString() } : task
    );
    setTasks(updatedTasks);
  };

  const onEditTask = (id) => {
    const task = tasks.find(task => task.id === id);
    setTaskToEdit(task);
  };

  const clearEdit = () => {
    setTaskToEdit(null);
  };

  const onSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
      <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} clearEdit={clearEdit} />
      <TaskList tasks={filteredTasks} onToggleComplete={onToggleComplete} onEditTask={onEditTask} />
    </div>
  );
};

export default App;