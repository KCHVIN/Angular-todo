import { Component, OnInit } from '@angular/core';

import { Todo } from './todo.model';

import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todosService: TodosService) { }
  
  ngOnInit(): void {
    this.todosService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  addTodo(todoName: string) {
    this.todosService.addTodo(todoName).subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todoIdx: number) {
    this.todosService.deleteTodo(todoIdx).subscribe(todos => {
      this.todos = todos;
    });
  }

  updateTodo(todo: Todo) {
    this.todosService.updateTodo(todo).subscribe(todos => {
      this.todos = todos;
    });
  }

  filterActiveTodos() {
    this.todosService.filterActiveTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  filterCompletedTodos() {
    this.todosService.filterCompletedTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  resetTodosFilter() {
    this.todosService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }
}
