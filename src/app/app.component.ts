import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from './model/todo.model';
import { Observable } from 'rxjs';
import { deleteTodo, loadTodo, loadTodoSuccess } from './store/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-todo-app';
  public isAddWorkSelected = false;
  public isUpdateWorkSelected = false;
  todo$!: Observable<Todo[]>;
  updateTodo!: Todo;
  constructor(private store: Store<{ todos: Todo[] }>) {
    this.todo$ = this.store.select('todos');
  }
  ngOnInit(): void {
    this.loadTodos();
  }
  loadTodos() {
    this.store.dispatch(loadTodo());
  }
  todoList = [];

  addWorkSelected() {
    this.isAddWorkSelected = !this.isAddWorkSelected;
  }

  update(todo: Todo) {
    this.updateTodo = todo;
    this.isUpdateWorkSelected = !this.isUpdateWorkSelected;
  }
  closeUpdateTask(event: any) {
    if (event) {
      this.isUpdateWorkSelected = false;
    }
  }
  closeAdd(event: any) {
    if (event) {
      this.isAddWorkSelected = false;
    }
  }
  deleteTask(todo: Todo) {
    let result = confirm('Are you sure you want to delete selected task?');
    if (result === true) {
      this.store.dispatch(deleteTodo({ id: todo.id }));
    }
  }
}
