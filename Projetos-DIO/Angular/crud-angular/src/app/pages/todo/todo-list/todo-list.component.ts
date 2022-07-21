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
    let items:any = localStorage.getItem('todos') // capturando o item na chave 'todo'
    let todos = JSON.parse(items); // com o item capturado desempacotamos ele do JSON.stringfy com o JSON.parse
    if(!todos) {
      this.todos = [];
    }
    else{
      this.todos = todos;
    }
  }

  addTodo(title: string) {
    this.todos.push({
      id: this.todos.length + 1,
      title: title,
      done: false
    });
    console.log(this.todo)
    localStorage.setItem('todos', JSON.stringify(this.todos)) // serve para salvar localmente os itens da lista. o JSON.stringfy serve para transformar o array em um tipo string de array.
  }

  removeTodo(todo: any) {
    console.log('O elemento pai recebeu', todo);
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1) // o metodo splice serve para deletar um elemento do array.
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
}
