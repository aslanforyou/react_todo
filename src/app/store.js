import { configureStore } from '@reduxjs/toolkit';
import ToDoReducer from './reducers/ToDoReducer';

export default configureStore({
  reducer: {
    todos: ToDoReducer,
  },
});
