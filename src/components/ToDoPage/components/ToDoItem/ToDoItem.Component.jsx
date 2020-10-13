import React from 'react';
import './ToDoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';


const ToDoItem = (props) => {
  const { task, deleteTask, markTask } = props;
  const checkTask = () => {
    task.checked = !task.checked;
    markTask(task);
  };

  return (
    <div className={`todo_item_container ${task.checked ? 'checked' : ''}`}>
      <button type="button" className="todo_item_checkbox" onClick={() => checkTask()}>
        {task.checked ? <FontAwesomeIcon icon="check" /> : null}
      </button>
      <div className="todo_item_title">
        <span>{task && task.title}</span>
      </div>
      <FontAwesomeIcon
        icon="trash-alt"
        className="todo_item_delete"
        onClick={() => {
          deleteTask(task);
        }}
      />
    </div>
  );
};

ToDoItem.propTypes = {
  task: PropTypes.exact({ title: PropTypes.string, checked: PropTypes.bool, ind: PropTypes.number }).isRequired,
  deleteTask: PropTypes.func.isRequired,
  markTask: PropTypes.func.isRequired,
};

export default ToDoItem;
