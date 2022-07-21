import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() remove = new EventEmitter;

  done = false;

  constructor() { }

  ngOnInit(): void {
  }

  removeTodo(): void {
    this.remove.emit(this.todo) // "emit" serve para enviar algo do elemento filho para o elemento pai, nesse caso estamo ennviando o "this.todo"
  }

  markAsDone(): void {
    this.todo.done = true;
    this.done = true;
    console.log(this.todo)
  }

}
