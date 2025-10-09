import { Component, inject } from '@angular/core';
import { DialogModule, Dialog, DialogConfig } from '@angular/cdk/dialog';
import { Child } from '../child/child';
import { Button } from 'primeng/button';
import { Modal } from '../modal/modal';
import { HostElements } from '@features/host-elements/host-elements';

interface DialogData {
  name: string;
  animal: string;
}

@Component({
  selector: 'app-parent',
  imports: [Child, Button, DialogModule, HostElements],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  dialog: Dialog = inject(Dialog);
  onClick() {
    console.log('Clicked');
  }

  openDialogBox(): void {
    const dialogRef = this.dialog.open(Modal, {
      width: '400px',
      data: { name: 'John', animal: 'Dog', id: 1 } as DialogData, // Optional data to pass
    });

    dialogRef.closed.subscribe(() => {
      console.log('Dialog closed');
    });
  }
}
