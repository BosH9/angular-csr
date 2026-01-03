import { Component, Host, inject, Optional } from '@angular/core';
import { EmojiService } from './emoji-service';

@Component({
  selector: 'app-random',
  standalone: true,
  template: `randomComponent: {{ emoji }}`,
})
export class RandomComponent {
  emoji = inject(EmojiService, { optional: true });
}
