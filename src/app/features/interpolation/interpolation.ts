import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { interval, take } from 'rxjs';
import { generateRandomString } from '@utils/util-functions';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.html',
  interpolation: ['**', '**'],
  standalone: true,
})
export class Interpolation {
  name = 'Interpolation';

  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  constructor() {
    interval(1000)
      .pipe(take(10))
      .subscribe(() => {
        this.name = generateRandomString(10);
        // this.cdr.markForCheck();
      });
  }
}
