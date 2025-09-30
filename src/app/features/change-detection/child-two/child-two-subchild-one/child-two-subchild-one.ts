import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child-two-subchild-one',
  imports: [],
  templateUrl: './child-two-subchild-one.html',
  styleUrl: './child-two-subchild-one.css',
})
export class ChildTwoSubchildOne implements OnChanges {
  @Input()
  name: string = '';

  ngOnChanges(): void {
    console.log('ngOnChanges: child-two-subchild-one');
  }
}
