import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  imports: [],
  templateUrl: './lifecycle-child.html',
  styleUrl: './lifecycle-child.css',
})
export class LifecycleChild
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  ngOnInit(): void {
    console.log('Lifecycle Child ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Lifecycle Child ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('Lifecycle Child ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('Lifecycle Child ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('Lifecycle Child ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('Lifecycle Child ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('Lifecycle Child ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('Lifecycle Child ngOnDestroy');
  }
}
