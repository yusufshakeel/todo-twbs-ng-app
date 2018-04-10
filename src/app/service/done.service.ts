import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class DoneService implements OnInit {

  work: { title: string, description: string, status: string, created_at: string, lastmodified_at: string }[];

  constructor() {
  }

  ngOnInit() {
    const someWork = {
      title: 'Hello World work done',
      description: 'Write Hello World code in JavaScript.',
      status: 'DONE',
      created_at: '2018-01-01 10:20:30',
      lastmodified_at: '2018-01-01 10:20:30'
    };
    this.work.push(someWork);
  }

}
