import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input () todo: Todo = {
    id: 0,
    title: '',
    done: false
  };

  done = false;

  constructor() { }

  ngOnInit(): void {
  }

  removeTodo(): void {
    console.log(this.todo)
  }

  markAsDone(): void {
    this.todo.done = true;
    this.done = true;
    console.log(this.todo)
  }

}
