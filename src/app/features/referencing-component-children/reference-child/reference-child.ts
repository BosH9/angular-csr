import { Component, contentChild, effect, viewChild } from '@angular/core';
import { Child } from '@features/content-projection/child/child';

@Component({
  selector: 'app-reference-child',
  imports: [],
  templateUrl: './reference-child.html',
  styleUrl: './reference-child.css',
})
export class ReferenceChild {
  name: string = 'Child';

  appChild = contentChild(Child);

  constructor() {
    effect(() => {
      console.log(this.appChild()?.name);
    });
  }
}
