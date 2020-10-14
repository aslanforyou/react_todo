import React, { useState } from 'react';
import './Input.css';
import { useDispatch } from 'react-redux';
import { addToDo } from '../../../../app/reducers/ToDoReducer';

const Input = () => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const addingTask = (event) => {
    if (event.keyCode === 13) {
      dispatch(addToDo(inputValue));
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

export default Input;
