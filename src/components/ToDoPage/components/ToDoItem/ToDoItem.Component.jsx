import React from 'react';
import './ToDoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { markTodo, deleteToDo } from '../../../../app/reducers/ToDoReducer';


const ToDoItem = (props) => {
  const { task } = props;
  const dispatch = useDispatch();

  const checkTask = () => {
    dispatch(markTodo(task));
  };

  const deleteTask = () => {
    dispatch(deleteToDo(task));
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
  task: PropTypes.exact({ title: PropTypes.string, checked: PropTypes.bool, ind: PropTypes.string }).isRequired,
};

export default ToDoItem;
