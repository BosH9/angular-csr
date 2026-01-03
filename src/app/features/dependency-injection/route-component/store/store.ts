import { Component, inject } from '@angular/core';
import { APP_CONFIG, Cart } from '../cart';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-store',
  imports: [Button],
  templateUrl: './store.html',
  styleUrl: './store.css',
  providers: [
    Cart,
    { provide: APP_CONFIG, useValue: { apiUrl: 'https://api.example.com' } },
  ],
})
export class Store {
  constructor(public cart: Cart) {
    console.log(this.cart.products);
    const config = inject(APP_CONFIG);
    console.log('Storeconfig', config);
  }

  addToCart() {
    this.cart.products = this.cart.products + 1;
    console.log(this.cart.products);
  }
}
