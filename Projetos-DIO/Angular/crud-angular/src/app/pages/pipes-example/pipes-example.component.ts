import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {

  number!: number;
  text = 'hello world!';
  data = new Date;
  pessoa = {
    nome: 'Miguel',
    idade: 22,
    profissao: 'Desenvolvedor'
  }

  constructor(private upperCasePipe: UpperCasePipe) { }


  ngOnInit(): void {
    this.text = this.upperCasePipe.transform(this.text)
  }

  mudaValor() {
    this.text = 'Novo texto';
  }
}
