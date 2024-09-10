import { createAction, props } from '@ngrx/store';
import { Todo } from '../model/todo.model';

export const addTodo = createAction('', props<{ todo: Todo }>());

export const loadTodo = createAction('[Todo] Load Todos');

export const loadTodoSuccess = createAction(
  '[Todo] Load Todos successful',
  props<{ todos: Todo[] }>()
);

export const updateTodo = createAction(
  '[Todo] to be updated',
  props<{ todo: Todo }>()
);

export const deleteTodo = createAction(
  '[Todo] to be deleted',
  props<{ id: number }>()
);
