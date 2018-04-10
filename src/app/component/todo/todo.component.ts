import {Component, OnInit} from '@angular/core';

import {TodoService} from '../../service/todo.service';
import {TodoModel} from '../../shared/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoArr: TodoModel[];

  constructor(public todoService: TodoService) {
  }

  ngOnInit() {
    this.todoArr = this.todoService.getTodoArr();
  }

  onSelectCard(elem) {
    if (elem.classList.contains('d-none')) {
      elem.classList.remove('d-none');
    } else {
      elem.classList.add('d-none');
    }
  }
}
