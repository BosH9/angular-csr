import { Component } from '@angular/core';
import { CustomContentComponent } from './custom-content';
import { ParentComponent } from './parent';

@Component({
  selector: 'app-view-providers',
  standalone: true,
  imports: [ParentComponent, CustomContentComponent],
  template: `
    <app-parent>
      <app-custom-content> </app-custom-content>
    </app-parent>
  `,
})
export class AppViewProvidersComponent {}
