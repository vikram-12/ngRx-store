import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [
    {
      id: 1,
      title: 'Complete Task, MON-96785, updation of UI',
      completed: false,
    },
    {
      id: 2,
      title: 'Complete Task, MON-96785, deletion of UI',
      completed: false,
    },
    {
      id: 3,
      title: 'Complete Task, MON-96786, status management of UI',
      completed: false,
    },
  ];

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }
}
