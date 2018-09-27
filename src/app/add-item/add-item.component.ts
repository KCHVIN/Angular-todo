import { Component, Output, EventEmitter} from '@angular/core';

import { TodosService } from '../todos.service';

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
    @Output() onNewTodo = new EventEmitter<string>();

    constructor(private todosService: TodosService) {
    }

    add(name: string) {
        this.onNewTodo.emit(name);
    }
}
