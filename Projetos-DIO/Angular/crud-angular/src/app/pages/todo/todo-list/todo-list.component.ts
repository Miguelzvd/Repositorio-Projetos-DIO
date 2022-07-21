import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo> = []


  constructor() { }

  ngOnInit(): void {

  }

  addTodo(title: string) {
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false))
    console.log(this.todos)
  }
}
