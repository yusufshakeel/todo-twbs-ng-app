import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class TodoService implements OnInit {

  todoArr = [];

  constructor() {
    const someWork = [
      {
        title: 'Hello World',
        description: 'Write Hello World code in JavaScript.',
        status: 'OPEN',
        created_at: '2018-01-01 10:20:30',
        lastmodified_at: '2018-01-01 10:20:30'
      },
      {
        title: 'Tea',
        description: 'Tea at 10am.',
        status: 'OPEN',
        created_at: '2018-01-01 10:20:30',
        lastmodified_at: '2018-01-01 10:20:30'
      },
      {
        title: 'Lunch @ Home',
        description: 'Having lunch @ 1pm.',
        status: 'OPEN',
        created_at: '2018-01-01 10:20:30',
        lastmodified_at: '2018-01-01 10:20:30'
      }
    ];
    this.todoArr = someWork;
  }

  ngOnInit() {
  }

  getTodoArr() {
    return this.todoArr.slice();
  }

  addTodo(data) {
    this.todoArr.push(data);
  }

}
