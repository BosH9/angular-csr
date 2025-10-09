import { Component, inject, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';

interface DialogData {
  name: string;
  animal: string;
}

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  data: DialogData = inject(DIALOG_DATA);
  constructor() {
    console.log(this.data);
  }
}
