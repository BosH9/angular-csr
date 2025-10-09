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
  {
    path: 'interpolation',
    loadComponent: () =>
      import('@features/interpolation/interpolation').then(
        (m) => m.Interpolation
      ),
  },
  {
    path: 'change-detection',
    loadComponent: () =>
      import('@features/change-detection/change-detection').then(
        (m) => m.ChangeDetectionEx
      ),
  },
  {
    path: 'content-projection',
    loadComponent: () =>
      import('@features/content-projection/parent/parent').then(
        (m) => m.Parent
      ),
  },
  {
    path: 'host-elements',
    loadComponent: () =>
      import('@features/host-elements/host-elements').then(
        (m) => m.HostElements
      ),
  },
];
