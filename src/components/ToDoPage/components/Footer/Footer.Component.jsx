import React from 'react';
import './Footer.css';
import PropTypes from 'prop-types';

const Footer = (props) => {
  const {
    markTasks,
    setFilter,
    clearTasks,
    filter,
    tasksLeft,
    clearFlag
  } = props;

  return (
    <div className="footer_container">
      <button type="button" className="task_left_button" onClick={markTasks}>
        {`${tasksLeft || 0} tasks left`}
      </button>
      <div className="btn-group">
        <button
          type="button"
          className={filter === 'all' ? 'checked' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          type="button"
          className={filter === 'todo' ? 'checked' : ''}
          onClick={() => setFilter('todo')}
        >
          ToDo
        </button>
        <button
          type="button"
          className={filter === 'completed' ? 'checked' : ''}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>
      <button type="button" className={clearFlag ? 'task_left_button ' : 'hidden'} onClick={clearTasks}>
        Clear completed
      </button>
    </div>
  );
};

Footer.propTypes = {
  markTasks: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  clearTasks: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  tasksLeft: PropTypes.number.isRequired,
  clearFlag: PropTypes.bool.isRequired
};

export default Footer;
