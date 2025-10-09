import {
  Component,
  contentChild,
  contentChildren,
  effect,
} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  name = 'App Child';

  feature = contentChild('feature');
  features = contentChildren('feature');

  constructor() {
    effect(() => {
      console.log(this.feature());
      console.log(this.features());
    });
  }
}
