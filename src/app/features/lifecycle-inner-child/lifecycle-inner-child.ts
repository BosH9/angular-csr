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
  selector: 'app-lifecycle-inner-child',
  imports: [],
  templateUrl: './lifecycle-inner-child.html',
})
export class LifecycleInnerChild
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
    console.log('Lifecycle Inner Child ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Lifecycle Inner Child ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('Lifecycle Inner Child ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('Lifecycle Inner Child ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('Lifecycle Inner Child ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('Lifecycle Inner Child ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('Lifecycle Inner Child ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('Lifecycle Inner Child ngOnDestroy');
  }
}
