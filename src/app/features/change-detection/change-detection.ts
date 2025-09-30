import { Component } from '@angular/core';
import { ChildOne } from './child-one/child-one';
import { ChildTwo } from './child-two/child-two';

@Component({
  selector: 'change-detection',
  templateUrl: 'change-detection.html',
  imports: [ChildOne, ChildTwo],
})
export class ChangeDetectionEx {}
