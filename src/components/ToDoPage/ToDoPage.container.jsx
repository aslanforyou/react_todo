import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header.Component';
import Footer from './components/Footer/Footer.Component';
import Input from './components/Input/Input.Component';
import ToDoItem from './components/ToDoItem/ToDoItem.Component';
import './ToDoPage.css';
import {
  selectTodos,
  selectCounter,
} from '../../app/reducers/ToDoReducer';

const ToDoPage = () => {
  const [state, setState] = useState({
    tasks: [
      { title: 'task1', checked: false, ind: new Date().getTime() },
      { title: 'task2', ind: new Date().getTime() + 1 }
    ],
    taskLeft: 2,
    filter: 'all'
  });

  const todos = useSelector(selectTodos);
  const countTodo = useSelector(selectCounter);

  const setFilter = (filter) => {
    setState({ filter });
  };


  const getTasks = () => todos.filter((task) => {
    if (state.filter === 'all') {
      return true;
    }
    if (state.filter === 'todo' && !task.checked) {
      return true;
    }
    return state.filter === 'completed' && task.checked;
  });

  const tasksToShow = getTasks();
  const { filter } = state;
  const hasCompletedTasks = countTodo < todos.length;

  return (
    <div>
      <Header title="My todo list" />
      <div className="container">
        <Input />
        {
          tasksToShow.map((task) => (
            <ToDoItem
              key={task.ind}
              task={task}
            />
          ))
        }
        <Footer
          tasksLeft={countTodo}
          clearFlag={hasCompletedTasks}
          setFilter={setFilter}
          filter={filter}
        />
      </div>
    </div>
  );
};

export default ToDoPage;
