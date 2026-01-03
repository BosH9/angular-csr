import { Component, Host, inject, Optional } from '@angular/core';
import { EmojiService } from './emoji-service';

@Component({
  selector: 'app-custom-content',
  standalone: true,
  template: `CustomContentComponent: {{ emoji }} `,
})
export class CustomContentComponent {
  emoji = inject(EmojiService, { optional: true });

  constructor() {
    // console.log(environment);
  }
  //   constructor(@Optional() @Host() public emoji: EmojiService) {}
}
