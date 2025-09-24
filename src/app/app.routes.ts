import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () =>
      import('@features/product/product.component').then(
        (m) => m.ProductComponent
      ),
  },
  {
    path: 'lifecycle',
    loadComponent: () =>
      import('@features/lifecycle/lifecycle').then((m) => m.Lifecycle),
  },
];
