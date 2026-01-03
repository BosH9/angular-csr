import { Component, inject } from '@angular/core';
import { FlowerService } from './services';
import { AnimalService } from './animal.service';
import { InspectorComponent } from './inspector.component';

@Component({
  selector: 'app-di-child',
  templateUrl: 'child.component.html',
  imports: [InspectorComponent],
  providers: [{ provide: FlowerService, useValue: { emoji: '🌻' } }],
  viewProviders: [{ provide: AnimalService, useValue: { emoji: '🐶' } }],
})
export class ChildComponent {
  flower = inject(FlowerService, {
    optional: true,
    skipSelf: true,
    host: true,
  });
  animal = inject(AnimalService, { host: true, skipSelf: true });
}
