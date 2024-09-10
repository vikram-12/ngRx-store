import { createReducer, on } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import {
  addTodo,
  deleteTodo,
  loadTodoSuccess,
  updateTodo,
} from './todo.actions';

//intial state
export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(loadTodoSuccess, (state, { todos }) => todos),
  on(addTodo, (state, { todo }) => [...state, todo]),
  on(updateTodo, (state, { todo }) =>
    state.map((t) => (t.id === todo.id ? { ...t, ...todo } : t))
  ),
  on(deleteTodo, (state, { id }) => state.filter((t) => t.id !== id))
);
