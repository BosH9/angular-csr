import { Component } from '@angular/core';
import { ChildTwoSubchildOne } from './child-two-subchild-one/child-two-subchild-one';
import { ChildTwoSubchildTwo } from './child-two-subchild-two/child-two-subchild-two';

@Component({
  selector: 'app-child-two',
  imports: [ChildTwoSubchildOne, ChildTwoSubchildTwo],
  templateUrl: './child-two.html',
  styleUrl: './child-two.css',
})
export class ChildTwo {
  childTwoName: string = '';

  setName(): void {
    this.childTwoName = 'childTwoName';
  }

  resetName(): void {
    this.childTwoName = '';
  }

  setParentName(name: string): void {
    this.childTwoName = name;
  }
}
