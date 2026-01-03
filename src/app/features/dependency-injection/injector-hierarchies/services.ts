import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LeafService {
  emoji = '🌿';
}

@Injectable({
  providedIn: 'root',
})
export class FlowerService {
  emoji = '🌺';
}
