import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../todo.model';

@Component({
  selector: 'app-todoslist',
  templateUrl: './todoslist.component.html',
  styleUrls: ['./todoslist.component.css']
})
export class TodoslistComponent {
  @Input() todos;
  @Output() onDeletedTodo = new EventEmitter<number>();
  @Output() onUpdatedTodo = new EventEmitter<Todo>();

  editingIdx:number = -1;
  
  disableEditing() {
    this.editingIdx = -1;
  }

  deleteTodo(todoIdx: number) {
    this.onDeletedTodo.emit(todoIdx);
  }

  updateTodo(todoIdx:number, todo: Todo) {
    todo.id = todoIdx;
    this.onUpdatedTodo.emit(todo);
    this.disableEditing();
  }

  isEditingTodo(idx: number) {
    return idx === this.editingIdx;
  }

  editTodo(idx: number) {
    this.editingIdx = idx;
  }

  toggleTodoDoneState(todoIdx: number, todo: Todo) {
    todo.id = todoIdx;
    todo.isDone = !todo.isDone;
    this.onUpdatedTodo.emit(todo);
  }

  selectAllTodos() {
    this.todos.forEach((todo: Todo, idx: number) => {
      todo.id = idx;
      todo.isDone = true;
      this.onUpdatedTodo.emit(todo);
    });
  }
}
