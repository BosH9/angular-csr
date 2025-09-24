import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Tables } from '@utils/database.types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _http = inject(HttpClient);

  getProducts() {
    return this._http.get<Tables<'products'>[]>(
      'http://localhost:3000/products'
    );
  }

  generateRandomString(length: number) {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  generateRandomStringArray(arrayLength: number, stringLength: number) {
    const randomStringArray = [];
    for (let i = 0; i < arrayLength; i++) {
      randomStringArray.push(this.generateRandomString(stringLength));
    }
    return randomStringArray;
  }
}
