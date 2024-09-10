import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/model/todo.model';
import { updateTodo } from 'src/app/store/todo.actions';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
})
export class UpdateTaskComponent implements OnInit {
  constructor(private store: Store<{ todos: Todo[] }>) {}
  @Output()
  public closeAddTask = new EventEmitter<any>();
  updateTodoTitle = '';
  checkCompleted: boolean = false;

  @Input()
  todoBeforeUpdate!: Todo;

  ngOnInit(): void {
    this.checkCompleted = this.todoBeforeUpdate.completed;
    this.updateTodoTitle = this.todoBeforeUpdate.title;
  }

  updateTodo() {
    let editTodo: Todo = {
      ...this.todoBeforeUpdate,
      title: this.updateTodoTitle || this.todoBeforeUpdate.title,
      completed: this.checkCompleted,
    };
    this.store.dispatch(updateTodo({ todo: editTodo }));
    this.closeTask();
  }
  closeTask() {
    this.closeAddTask.emit(true);
  }
}
