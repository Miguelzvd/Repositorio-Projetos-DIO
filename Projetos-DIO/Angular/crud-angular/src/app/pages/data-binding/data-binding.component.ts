import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Miguel Azevedo'
  img = 'https://picsum.photos/300/300'
  buttonText = 'Clique aqui'
  textRed = false
  bgColor = 'Green'
  fontSize = '20px'
  widthImg = 600
  inputText = ''
  number = 0 
  destroy = false

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome() {
    return this.text
  }

  clicou(value:string) {
    console.log('clicou aqui', value)
    this.textRed = true;
  }

  clicouNoFilho(text: string){
    console.log(text)
  }

  incremento () {
    this.number++
  }

  destroyComponent() {
    this.destroy = true
  }
}
