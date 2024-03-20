import React, { useState } from 'react';
import { Task } from './components/Task';
import { Llista } from './Llista';

const lista = new Llista();

export default function App() {
  const [taskName, setTaskName] = useState('');

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      lista.addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <>
      <h1>ToDoList</h1>
      <form className="td-form" onSubmit={addTask}>
        <input
          className="td-input"
          type="text"
          placeholder="Add task..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)} />

        <button className="td-add" type="submit">Add</button>

      </form>
      <div className="td-list">
        {lista.getTasks().map(task => (
          <Task key={task.id} task={task.name} id={task.id} lista={lista} />
        ))}
      </div>

    </>
  );
}
