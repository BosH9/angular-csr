import { Component, DoCheck, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child-two-subchild-two',
  imports: [],
  templateUrl: './child-two-subchild-two.html',
  styleUrl: './child-two-subchild-two.css',
})
export class ChildTwoSubchildTwo implements OnChanges {
  @Input()
  name: string = '';

  ngOnChanges(): void {
    console.log('ngOnChanges: child-two-subchild-two');
  }
}
