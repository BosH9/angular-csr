import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-child-two-subchild-one',
  imports: [],
  templateUrl: './child-two-subchild-one.html',
  styleUrl: './child-two-subchild-one.css',
})
export class ChildTwoSubchildOne implements OnChanges {
  @Input()
  name: string = '';

  @Output()
  parentName = new EventEmitter<string>();

  ngOnChanges(): void {
    console.log('ngOnChanges: child-two-subchild-one');
  }

  setParentName(): void {
    this.parentName.emit('Changed parent name from the child');
  }
}
