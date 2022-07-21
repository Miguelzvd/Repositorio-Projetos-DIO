import { AfterContentChecked, AfterContentInit, Component, DoCheck, OnChanges, OnInit, AfterViewChecked, OnDestroy, SimpleChanges, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy, AfterViewInit{

  @Input() number = 10

  constructor() { 
    console.log('chamou o construtor')
  }

  ngOnChanges(changes: SimpleChanges): void {
   console.log('chamou o OnChanges')    
  }

  ngOnInit(): void {
    console.log('chamou o On Init')
  }

  ngDoCheck(): void {
      console.log('Chamou o On Checked')
  }

  ngAfterContentInit(): void {
      console.log('chamou o After Content Init')
  }

  ngAfterContentChecked(): void {
    console.log('chamou o After Content Checked')
  }

  ngAfterViewChecked(): void {
    console.log('chamou o After View Checked')
  }

  ngAfterViewInit(): void {
    console.log('chamou o After Content Init')
  }

  ngOnDestroy(): void {
      console.log('chamou o On Destroy')
  }
}
