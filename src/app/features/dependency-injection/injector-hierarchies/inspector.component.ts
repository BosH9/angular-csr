import { Component, inject } from '@angular/core';
import { AnimalService } from './animal.service';
import { FlowerService } from './services';

@Component({
  selector: 'app-inspector',
  template: `
    <p>Emoji from FlowerService: {{ flower.emoji }}</p>
    <p>Emoji from AnimalService: {{ animal.emoji }}</p>
  `,
})
export class InspectorComponent {
  flower = inject(FlowerService);
  animal = inject(AnimalService);
}
