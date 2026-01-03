import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor() {}
  data = [
    {
      id: 1,
      name: 'London',
      temperature: 20,
    },
    {
      id: 2,
      name: 'New York',
      temperature: 25,
    },
  ];
}
