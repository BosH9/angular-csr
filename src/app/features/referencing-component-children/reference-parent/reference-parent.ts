import {
  Component,
  computed,
  contentChild,
  effect,
  ElementRef,
  viewChild,
  viewChildren,
} from '@angular/core';
import { ReferenceChild } from '../reference-child/reference-child';
import { Modal } from '@features/content-projection/modal/modal';
import { Child } from '@features/content-projection/child/child';

@Component({
  selector: 'app-reference-parent',
  imports: [ReferenceChild, Modal, Child],
  templateUrl: './reference-parent.html',
  styleUrl: './reference-parent.css',
})
export class ReferenceParent {
  viewChild = viewChild(ReferenceChild);
  viewChildName = computed(() => this.viewChild()?.name);

  viewChildren = viewChildren(ReferenceChild);
  viewChildrenTexts = computed(() =>
    this.viewChildren().map((viewChild) => viewChild.name)
  );

  contentChildx = contentChild(Child);

  title = viewChild<ElementRef>('ptitle');
  titleRef = viewChild.required('x');

  titles = viewChildren('ptitle');

  // appChilds = viewChildren<Child, ElementRef>('child', { read: ElementRef });
  appChilds = viewChildren('child', { read: ElementRef });

  constructor() {
    effect(() => {
      console.log('effect');
      console.log(this.viewChild()?.name);
      console.log('viewChildren names', this.viewChildrenTexts());

      console.log(this.contentChildx()?.name);

      console.log(this.title()?.nativeElement);

      // Child query result is required but no value is available
      // console.log(this.titleRef());

      console.log(this.titles());

      console.log(this.appChilds());
    });

    // Need to find out why it is not available in computed
    computed(() => {
      console.log(this.title()?.nativeElement.textContent);
    });
  }
}
