import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todosfooter',
  templateUrl: './todosfooter.component.html',
  styleUrls: ['./todosfooter.component.css']
})
export class TodosfooterComponent {
  @Input() todosLength: number;

  @Output() onCompletedSelected = new EventEmitter<void>();
  @Output() onActiveSelected = new EventEmitter<void>();
  @Output() onAllSelected = new EventEmitter<void>();

  itemsLeftMessage: string;
  activeSelected: boolean;
  allSelected: boolean;
  completedSelected: boolean;

  constructor() { }

  getItemsLeftMessage() {
    if (this.todosLength === 1) {
      return `${this.todosLength} item left`;
    } else if (this.todosLength > 1) {
      return `${this.todosLength} items left`;
    } 
    return '';
  }

  isFooterDisplayed() {
    return this.todosLength > 0;
  }

  displayOnlyActive() {
    this.onActiveSelected.emit();
    this.setSelected(Option.ACTIVE);
  }

  displayOnlyCompleted() {
    this.onCompletedSelected.emit();
    this.setSelected(Option.COMPLETED);
  }

  displayAll() {
    this.onAllSelected.emit();
    this.setSelected(Option.ALL);
  }

  setSelected(selectedOption: Option) {
    this.allSelected = selectedOption === Option.ALL;
    this.activeSelected = selectedOption === Option.ACTIVE;
    this.completedSelected = selectedOption === Option.COMPLETED;
  }
  deleteAll() {
    
  }
}

enum Option {ACTIVE, COMPLETED, ALL}
