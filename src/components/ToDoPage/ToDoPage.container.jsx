import React, { useState } from 'react';
import Header from './components/Header/Header.Component';
import Footer from './components/Footer/Footer.Component';
import Input from './components/Input/Input.Component';
import ToDoItem from './components/ToDoItem/ToDoItem.Component';
import './ToDoPage.css';

const ToDoPage = () => {
  const [state, setState] = useState({
    tasks: [
      { title: 'task1', checked: false, ind: new Date().getTime() },
      { title: 'task2', ind: new Date().getTime() + 1 }
    ],
    taskLeft: 2,
    filter: 'all'
  });

  const addTask = (taskTitle) => {
    if (taskTitle.toString().trim().length === 0) {
      return;
    }
    const { tasks } = state;
    tasks.push({ title: taskTitle, ind: new Date().getTime() });
    setState({ tasks, taskLeft: state.taskLeft + 1, filter: state.filter });
  };

  const clearTasks = () => {
    const tasks = state.tasks.filter((task) => !task.checked);
    setState({ tasks, taskLeft: tasks.length, filter: state.filter });
  };

  const markAllTasks = () => {
    const unchecked = state.tasks.filter((task) => !task.checked);
    const allChecked = unchecked.length > 0;
    const tasks = state.tasks.map((task) => {
    // eslint-disable-next-line no-param-reassign
      task.checked = allChecked;
      return task;
    });
    const taskLeft = allChecked ? 0 : state.tasks.length;
    setState({ tasks, taskLeft, filter: state.filter });
  };

  const markTask = (updTask) => {
    const tasks = state.tasks.map((task) => {
      if (task.ind === updTask.ind) {
        return updTask;
      }
      return task;
    });

    const taskLeft = tasks.filter((task) => !task.checked).length;
    setState({ tasks, taskLeft, filter: state.filter });
  };

  const deleteTask = (delTask) => {
    const tasks = state.tasks.filter((task) => task.ind !== delTask.ind);

    const taskLeft = tasks.filter((task) => !task.checked).length;
    setState({ tasks, taskLeft, filter: state.filter });
  };

  const setFilter = (filter) => {
    setState({ tasks: state.tasks, taskLeft: state.taskLeft, filter });
  };


  const getTasks = () => state.tasks.filter((task) => {
    if (state.filter === 'all') {
      return true;
    }
    if (state.filter === 'todo' && !task.checked) {
      return true;
    }
    return state.filter === 'completed' && task.checked;
  });

  const tasksToShow = getTasks();
  const { tasks, taskLeft, filter } = state;
  const hasCompletedTasks = taskLeft < tasks.length;

  return (
    <div>
      <Header title="My todo list" />
      <div className="container">
        <Input addTask={addTask} />
        {
          tasksToShow.map((task) => (
            <ToDoItem
              key={task.ind}
              task={task}
              markTask={markTask}
              deleteTask={deleteTask}
            />
          ))
        }
        <Footer
          clearTasks={clearTasks}
          markTasks={markAllTasks}
          tasksLeft={taskLeft}
          clearFlag={hasCompletedTasks}
          setFilter={setFilter}
          filter={filter}
        />
      </div>
    </div>
  );
};

export default ToDoPage;
