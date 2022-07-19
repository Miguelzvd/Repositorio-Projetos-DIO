import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spa-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  constructor() { }

  // ngOnchange: faz parte do life cycle hook.

  ngOnInit(): void {
  }

  @Input() valorInicial: number = 0; // Especifica que essa variavel pode receber valores.

}
