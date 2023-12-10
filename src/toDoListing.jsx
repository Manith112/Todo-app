import React, { useState } from 'react';

import Listing from './Listing';


const ToDoListing = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Go Shopping' },
    { id: 2, title: 'Task 2', description: 'Do Laundry' },
  ]);

  const [newTaskText, setNewTaskText] = useState({ title: '', description: ''});
  const [updateTaskId, setUpdateTaskId] = useState(null);
  const [updateTaskText, setUpdateTaskText] = useState('');

  const addTask = () => {
    if (newTaskText.title.trim() !== '') {
      setTasks([...tasks, { id: tasks.length + 1, ...newTaskText }]);
      setNewTaskText({ title: '', description: ''});
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    // If the task being updated is deleted, reset the update state
    if (updateTaskId === id) {
      setUpdateTaskId(null);
      setUpdateTaskText('');
    }
  };

  const updateTask = () => {
    if (updateTaskText.title.trim() !== '' && updateTaskId !== null) {
      setTasks(
        tasks.map((task) =>
          task.id === updateTaskId ? { ...task, title: updateTaskText.title, description: updateTaskText.description } : task
        )
      );
      setUpdateTaskId(null);
      setUpdateTaskText({ title: '', description: '' });
    }
  };

  return (
   
    <div className='container'>
      <h1>Todo App</h1>
      
      <div className='new'>
        <input
          type="text"
          placeholder="Title"
          value={newTaskText.title}
          onChange={(e) => setNewTaskText({...newTaskText, title: e.target.value})}
        />
    <textarea
          placeholder="Description"
          value={newTaskText.description}
          onChange={(e) => setNewTaskText({ ...newTaskText, description: e.target.value })}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      {updateTaskId !== null && (
        <div className='update'>
          <input
            type="text"
            placeholder="Update task"
            value={updateTaskText.title}
            onChange={(e) => setUpdateTaskText({...updateTaskText, title: e.target.value})}
          />
          <textarea
            placeholder="Update description"
            value={updateTaskText.description}
            onChange={(e) => setUpdateTaskText({ ...updateTaskText, description: e.target.value })}
          />
          <button onClick={updateTask}>Update Task</button>
        </div>
      )}
      <Listing tasks={tasks} onDelete={deleteTask} onUpdate={(id) => setUpdateTaskId(id)} />
    </div>
   
  );
};
export default ToDoListing;