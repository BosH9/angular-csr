import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChildOneSubchildOne } from './child-one-subchild-one/child-one-subchild-one';
import { ChildOneSubchildTwo } from './child-one-subchild-two/child-one-subchild-two';
import { User } from '../types';

@Component({
  selector: 'app-child-one',
  imports: [ChildOneSubchildOne, ChildOneSubchildTwo],
  templateUrl: './child-one.html',
  styleUrl: './child-one.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildOne {
  childOneName: string = '';
  user: User | undefined = {
    name: 'Test',
    age: 33,
    address: { city: 'hyd', pinCode: 500059 },
  };

  setName(): void {
    // this.childOneName = 'childOneName';
    // this.user = { name: 'Ramana', age: 12 };
    // this.user = { name: 'Test', age: 12 };
    if (this.user && this.user.address?.city) {
      // this.user.age = 12;
      this.user.address.city = 'Bangalore';
    }
  }

  resetName(): void {
    this.childOneName = '';
    this.user = undefined;
  }
}
