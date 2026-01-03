import { inject, Inject, Injectable, InjectionToken } from '@angular/core';

let a = 0;

export interface AppConfig {
  apiUrl: string;
  version: string;
  features: Record<string, boolean>;
}

// export const APP_CONFIG = new InjectionToken<AppConfig>('app.config', {
//   providedIn: 'root', // it will be default, if factory is exists
//   factory: () => ({
//     apiUrl: 'https://api.example.com',
//     version: '1.0.0',
//     features: {
//       darkMode: true,
//       analytics: false,
//     },
//   }),
// });

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

@Injectable()
export class Cart {
  products = 0;

  constructor() {
    // @Inject(APP_CONFIG) private config: AppConfig
    // console.log(this.config);

    const config = inject(APP_CONFIG);
    console.log('Cart config ', config);
  }
}
