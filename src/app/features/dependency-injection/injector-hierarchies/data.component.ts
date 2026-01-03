import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Self,
  SkipSelf,
} from '@angular/core';
import { FlowerService, LeafService } from './services';
import { Button } from 'primeng/button';
import { Child } from '@features/content-projection/child/child';
import { ChildComponent } from './child.component';
import { AnimalService } from './animal.service';
import { InspectorComponent } from './inspector.component';

@Component({
  selector: 'app-self-no-data.component',
  imports: [Button, ChildComponent, InspectorComponent],
  templateUrl: './data.component.html',
  providers: [
    {
      provide: LeafService,
      useValue: {
        emoji: 'F🌸',
      },
    },
  ],
  viewProviders: [{ provide: AnimalService, useValue: { emoji: '🦔' } }],
})
export class SelfNoDataComponent {
  // leafService1 = inject(LeafService, { self: false });
  // leafService2 = inject(LeafService, { optional: true, self: true });

  // leafValue1?: string;
  // leafValue2?: string;

  flower = inject(FlowerService);
  public animal = inject(AnimalService);
  emoji;
  constructor(@SkipSelf() private leafService: LeafService) {
    console.log(this.leafService?.emoji);
    this.emoji = this.leafService?.emoji;
  }

  // getLeafValue1() {
  //   this.leafValue1 = this.leafService1?.emoji;
  // }

  // getLeafValue2() {
  //   this.leafService1.emoji = '🌸';
  //   this.leafValue2 = this.leafService2?.emoji;

  // }
}
