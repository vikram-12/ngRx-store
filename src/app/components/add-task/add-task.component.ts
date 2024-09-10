import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/model/todo.model';
import { addTodo } from 'src/app/store/todo.actions';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  public newTodoTitle: any = '';
  @Output()
  public closeAddTask = new EventEmitter<any>();

  constructor(private store: Store<{ todos: Todo[] }>) {}
  closeTask() {
    this.closeAddTask.emit(true);
  }
  addNewTodo() {
    const newTodo: Todo = {
      id: Math.random(), // Generate a unique id
      title: this.newTodoTitle,
      completed: false,
    };
    this.store.dispatch(addTodo({ todo: newTodo }));
    this.newTodoTitle = '';
    this.closeTask();
  }
}
