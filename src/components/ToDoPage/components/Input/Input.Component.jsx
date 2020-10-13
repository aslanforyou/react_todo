import React, { useState } from 'react';
import './Input.css';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { addTask } = props;
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const addingTask = (event) => {
    if (event.keyCode === 13) {
      addTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="input_container">
      <input
        placeholder="Enter your task here"
        value={inputValue}
        onChange={(ev) => handleChange(ev)}
        onKeyDown={(event) => addingTask(event)}
      />
    </div>
  );
};

Input.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default Input;
