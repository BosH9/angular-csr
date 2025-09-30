import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child-one-subchild-two',
  imports: [],
  templateUrl: './child-one-subchild-two.html',
  styleUrl: './child-one-subchild-two.css',
})
export class ChildOneSubchildTwo implements OnChanges {
  @Input()
  name: string = '';

  ngOnChanges(): void {
    console.log('ngOnChanges: child-one-subchild-two');
  }
}
