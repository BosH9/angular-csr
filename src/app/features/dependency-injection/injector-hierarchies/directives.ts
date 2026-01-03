import { Directive, Host } from '@angular/core';
import { LeafService } from './services';

@Directive({
  selector: '[myDirective]',
})
export class MyDirective {
  constructor(@Host() leafService: LeafService) {}
}
