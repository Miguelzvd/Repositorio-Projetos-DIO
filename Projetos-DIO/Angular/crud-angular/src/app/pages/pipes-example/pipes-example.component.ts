import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {

  numbe = 0;
  text = 'hello world!';

  constructor() { }

  ngOnInit(): void {
  }

}
