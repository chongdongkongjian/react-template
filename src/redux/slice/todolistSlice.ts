import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  todoList: {
    id: number;
    text: string;
    completed: boolean;
  }[];
} = {
  todoList: [
    {
      id: 17346783456,
      text: 'react reudx',
      completed: false,
    },
  ],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add(state, { payload }) {
      state.todoList.push({
        id: Date.now(),
        text: payload,
        completed: false,
      });
    },
  },
});

export default todoSlice;
