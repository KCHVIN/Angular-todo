import { Injectable } from '@angular/core';

import { Observable, of, Subject } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from './todo.model';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos: Todo[] = [];

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }

  filterActiveTodos(): Observable<Todo[]> {
    return of(this.todos.filter(todo => !todo.isDone));
  }

  filterCompletedTodos(): Observable<Todo[]> {
    return of(this.todos.filter(todo => !!todo.isDone));
  }

  addTodo(todoName: string): Observable<Todo[]> {
    this.todos.push(new Todo(todoName));
    return this.getTodos();
  }

  deleteTodo(todoId: number): Observable<Todo[]> {
    this.todos.splice(todoId, 1)
    return this.getTodos();
  }

  updateTodo(todo: Todo): Observable<Todo[]> {
    this.todos[todo.id].name = todo.name;
    return this.getTodos();
  }
}
