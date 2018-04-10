import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  titleCharLimit = 200;
  descriptionCharLimit = 1000;

  todoData: { title: string, description: string, status: string, created_at: string, lastmodified_at: string };

  errorMsg = {
    titleMissing: false,
    descriptionMissing: false
  };

  constructor() {
  }

  ngOnInit() {
    this.todoData = {title: '', description: '', status: '', created_at: '', lastmodified_at: ''};

  }

  createTodo() {
    console.log('form submitted');
    console.log(this.todoData);

    if (this.todoData.title.length === 0) {
      this.errorMsg.titleMissing = true;
    } else {
      this.errorMsg.titleMissing = false;
    }

    if (this.todoData.description.length === 0) {
      this.errorMsg.descriptionMissing = true;
    } else {
      this.errorMsg.descriptionMissing = false;
    }
  }

}
