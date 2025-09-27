import { FormControl, ReactiveFormsModule } from '@angular/forms';
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
import { LifecycleChild } from '@features/lifecycle-child/lifecycle-child';
import { LifecycleInnerChild } from '@features/lifecycle-inner-child/lifecycle-inner-child';

@Component({
  selector: 'app-lifecycle',
  imports: [ReactiveFormsModule, LifecycleChild, LifecycleInnerChild],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css',
})
export class Lifecycle
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
    console.log('Lifecycle Parent ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Lifecycle Parent ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('Lifecycle Parent ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('Lifecycle Parent ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('Lifecycle Parent ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('Lifecycle Parent ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('Lifecycle Parent ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('Lifecycle Parent ngOnDestroy');
  }
  name = new FormControl('');
}
