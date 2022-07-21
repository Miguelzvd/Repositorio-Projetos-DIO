import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo> = [];

  todo: Todo = {
    id: 0,
    title: '',
    done: false
  }


  constructor() { }

  ngOnInit(): void {

  }

  addTodo(title: string) {
    this.todos.push({
      id: this.todos.length + 1,
      title: title,
      done: false
    });
    console.log(this.todo)
  }
}
