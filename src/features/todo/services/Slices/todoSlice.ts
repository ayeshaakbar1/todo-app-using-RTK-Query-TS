import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Todo} from "../../todo";


interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
});

export const { setTodo, addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
