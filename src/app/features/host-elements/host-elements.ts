import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-host-elements',
  imports: [],
  templateUrl: './host-elements.html',
  styleUrl: './host-elements.css',
  host: {
    '[attr.role]': `getRole()`,
    '[attr.aria-valuenow]': 'value',
    '[class.active]': 'isActive()',
    '[tabIndex]': 'disabled ? -1 : 0',
    '(keydown)': 'updateValue($event)',
    '[style.background]': `hasError() ? "red" : "green"`,
    '[style.--my-background]': 'color()',
    '[style.display]': "'block'",
  },
})
export class HostElements {
  value: number = 0;
  disabled: boolean = false;
  isActive = signal(false);
  hasError = signal(false);
  color = signal('lightgreen');

  getRole(): string {
    return 'slider';
  }

  updateValue(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      this.value++;
    } else if (event.key === 'ArrowDown') {
      this.value--;
    }
  }
}
