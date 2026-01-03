import { Component, inject, InjectionToken } from '@angular/core';
import { WeatherService } from './weather-service';

function add(a: number, b: number) {
  return a + b;
}

function factoryFn() {
  return {
    add: add,
    test: inject(add),
  };
}

export const API_URL = new InjectionToken<string>('api.url');

interface Logger {
  log(message: string): void;
}

export const LOGGER = new InjectionToken<Logger>('logger');

export function loggerFactory(): Logger {
  return {
    log(message: string) {
      console.log(message);
    },
  };
}

interface fetcher {
  fetch(url: string): Promise<any>;
}

interface fetcher {
  update(): void;
}

class DataF implements fetcher {
  fetch(url: string): Promise<any> {
    return Promise.resolve();
  }

  update(): void {}
}

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
  providers: [
    { provide: add, useValue: add },
    { provide: API_URL, useValue: 'https://angular.io' },
    { provide: LOGGER, useFactory: loggerFactory },
  ],
})
export class Weather {
  weatherService = inject(WeatherService);
  add = inject(add);

  constructor() {
    console.log(this.weatherService.data);
    console.log(this.add(1, 2));
    console.log(factoryFn());

    console.log(inject(API_URL));
    console.log(inject(LOGGER));
  }

  test() {
    let a = inject(WeatherService);

    console.log(a);
  }
}
