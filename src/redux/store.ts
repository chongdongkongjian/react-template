import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slice/todolistSlice';

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

export default store;
