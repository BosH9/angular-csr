import { Component } from '@angular/core';
import { RandomComponent } from './random';
import { EmojiService } from './emoji-service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [RandomComponent],
  template: `
    <div>
      <app-random></app-random>
      <h4>Ng Content</h4>
      <ng-content></ng-content>
    </div>
  `,
  viewProviders: [{ provide: EmojiService, useValue: '👪' }],
})
export class ParentComponent {}
