import { Component, OnInit, Input } from '@angular/core';

import { TODO } from '../mock-items';
import { Todo } from '../todo.model';
import { TodosService } from '../todos.service';


@Component({
  selector: 'app-items-completed',
  templateUrl: './items-completed.component.html',
  styleUrls: ['./items-completed.component.css']
})
export class ItemsCompletedComponent implements OnInit {

  @Input('InitList') todosList;

  todos = TODO;
  Todo: Todo[];

  selectedCompleted() {
    for (let i = 0; i !== this.todosList.length; i++) {
      if (this.todosList[i].selected) {
        this.Todo.push(this.todosList[i].name);
      }
    }
    console.log("function rentrer");
    for (let i = 0; i !== this.todosList.length; i++) {
      console.log("i", i, "=", this.todosList);
    }
  }
  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

}
