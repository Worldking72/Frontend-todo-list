import React, { useState } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import '../src/Styles/globals.css';
import './App.css';

function Home({ initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1, completed: false, lastUpdated: new Date() }]);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TaskForm onSave={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await axios.get('/data/tasks.json');
  return {
    props: {
      initialTasks: response.data,
    },
  };
}

export default Home;