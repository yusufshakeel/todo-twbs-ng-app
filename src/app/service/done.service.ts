import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class DoneService implements OnInit {

  todoArr = [];

  constructor() {
    const someWork = {
      title: 'Done',
      description: 'Write Hello World code in JavaScript.',
      status: 'OPEN',
      created_at: '2018-01-01 10:20:30',
      lastmodified_at: '2018-01-01 10:20:30'
    };
    this.todoArr.push(someWork);
  }

  ngOnInit() {
  }

  getTodoArr() {
    return this.todoArr.slice();
  }

}
