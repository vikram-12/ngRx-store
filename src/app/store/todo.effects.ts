import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from '../service/todo.service';
import { loadTodo, loadTodoSuccess } from './todo.actions';
import { map, mergeMap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodo),
      mergeMap(() =>
        this.todoService
          .getTodos()
          .pipe(map((todos) => loadTodoSuccess({ todos })))
      )
    )
  );
}
