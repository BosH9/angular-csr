import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { User } from '@features/change-detection/types';

@Component({
  selector: 'app-child-one-subchild-one',
  imports: [],
  templateUrl: './child-one-subchild-one.html',
  styleUrl: './child-one-subchild-one.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildOneSubchildOne implements OnChanges {
  @Input()
  name: string = '';

  @Input()
  user: User | undefined;

  constructor(private _cdr: ChangeDetectorRef) {
    // this._cdr.detach();
  }

  ngOnChanges(): void {
    console.log('ngOnChanges: child-one-subchild-one');
  }
}
