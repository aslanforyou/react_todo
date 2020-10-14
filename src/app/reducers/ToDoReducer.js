/* eslint-disable no-param-reassign */
import { createSlice, nanoid } from '@reduxjs/toolkit';

export const ToDoSlice = createSlice({
  name: 'todos',
  initialState: {
    tasks: []
  },
  reducers: {
    addToDo: {
      reducer(state, action) {
        if (action.payload.title.trim().length > 0) {
          state.tasks.push(action.payload);
        }
      },
      prepare(title) {
        return {
          payload: {
            ind: nanoid(),
            title,
            checked: false
          }
        };
      }
    },
    markTodo: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.ind === action.payload.ind) {
          const newTask = { ...task };
          newTask.checked = !newTask.checked;
          return newTask;
        }
        return task;
      });
    },
    markAll: (state) => {
      const unchecked = state.tasks.filter((task) => !task.checked);
      const allChecked = unchecked.length > 0;
      state.tasks = state.tasks.map((task) => {
        task.checked = allChecked;
        return task;
      });
    },
    deleteToDo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.ind !== action.payload.ind);
    },
    deleteChecked: (state) => {
      state.tasks = state.tasks.filter((task) => !task.checked);
    }
  }
});
export const { addToDo, markTodo, deleteToDo, deleteChecked, markAll } = ToDoSlice.actions;

export const selectTodos = (state) => state.todos.tasks;
export const selectCounter = (state) => state.todos.tasks.filter((task) => !task.checked).length;

export default ToDoSlice.reducer;
