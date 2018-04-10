import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../service/todo.service';
import * as moment from 'moment';

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
    any: false,
    titleMissing: false,
    descriptionMissing: false
  };

  constructor(private todoArr: TodoService) {
  }

  ngOnInit() {
    this.todoData = {title: '', description: '', status: '', created_at: '', lastmodified_at: ''};

  }

  createTodo() {
    console.log('form submitted');
    console.log(this.todoData);

    if (this.todoData.title.length === 0) {
      this.errorMsg.titleMissing = true;
      this.errorMsg.any = true;
    } else {
      this.errorMsg.titleMissing = false;
      this.errorMsg.any = false;
    }

    if (this.todoData.description.length === 0) {
      this.errorMsg.descriptionMissing = true;
      this.errorMsg.any = true;
    } else {
      this.errorMsg.descriptionMissing = false;
      this.errorMsg.any = false;
    }

    if (this.errorMsg.any === false) {
      this.todoData.created_at = moment().format('YYYY-MM-DD HH:mm:ss');
      this.todoData.lastmodified_at = moment().format('YYYY-MM-DD HH:mm:ss');
      this.todoArr.addTodo(this.todoData);
    }
  }

}
