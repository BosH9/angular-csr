import { Routes } from '@angular/router';
import { Cart } from '@features/dependency-injection/route-component/cart';

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
  {
    path: 'reference-component-children',
    loadComponent: () =>
      import(
        '@features/referencing-component-children/reference-parent/reference-parent'
      ).then((m) => m.ReferenceParent),
  },
  {
    path: 'di',
    loadChildren: () => [
      {
        path: 'weather',
        loadComponent: () =>
          import('@features/dependency-injection/weather/weather').then(
            (m) => m.Weather
          ),
      },
      {
        path: 'view-providers',
        loadComponent: () =>
          import(
            '@features/dependency-injection/view-providers/view-providers'
          ).then((m) => m.AppViewProvidersComponent),
      },
      {
        path: 'store',
        loadComponent: () =>
          import(
            '@features/dependency-injection/route-component/store/store'
          ).then((m) => m.Store),
        providers: [Cart],
      },
      {
        path: 'resolution-modifiers',
        loadComponent: () =>
          import(
            '@features/dependency-injection/injector-hierarchies/data.component'
          ).then((m) => m.SelfNoDataComponent),
        providers: [Cart],
      },
    ],
  },
];
