import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  input,
  model,
  OnChanges,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { JsonPipe } from '@angular/common';
import { ProductService } from './product.service';
import { Tables } from '@utils/database.types';
import { interval, map, switchMap } from 'rxjs';
import { ProductDetails } from '@features/product-details/product-details';
import { APP_CONFIG } from '@utils/tokens/apptoken';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [ProductDetails],
  providers: [{ provide: APP_CONFIG, useValue: 'Production config' }],
})
export class ProductComponent implements OnInit, OnChanges {
  products = signal<Tables<'products'>[]>([]);
  // products = signal<string[]>([]);
  outputProduct: Tables<'products'> = {} as Tables<'products'>;

  sample = model('');

  private _productService = inject(ProductService);
  // private _cdr = inject(ChangeDetectorRef);

  constructor() {
    this.products.set([
      {
        productId: 42419,
        gender: 'Girls',
        category: 'Apparel',
        subCategory: 'Topwear',
        productType: 'Tops',
        colour: 'White',
        usage: 'Casual',
        productTitle: 'Gini and Jony Girls Knit White Top',
        image: '42419.jpg',
        imageURL:
          'http://assets.myntassets.com/v1/images/style/properties/f3964f76c78edd85f4512d98b26d52e9_images.jpg',
        price: '1,856.55',
      },
      {
        productId: 34009,
        gender: 'Girls',
        category: 'Apparel',
        subCategory: 'Topwear',
        productType: 'Tops',
        colour: 'Black',
        usage: 'Casual',
        productTitle: 'Gini and Jony Girls Black Top',
        image: '34009.jpg',
        imageURL:
          'http://assets.myntassets.com/v1/images/style/properties/dce310e4c15223a6c964631190263284_images.jpg',
        price: '626.07',
      },
      {
        productId: 40143,
        gender: 'Girls',
        category: 'Apparel',
        subCategory: 'Topwear',
        productType: 'Tops',
        colour: 'Blue',
        usage: 'Casual',
        productTitle: 'Gini and Jony Girls Pretty Blossom Blue Top',
        image: '40143.jpg',
        imageURL:
          'http://assets.myntassets.com/v1/images/style/properties/fc3c1b46906d5c148c45f532d0b3ffb5_images.jpg',
        price: '1,997.32',
      },
      {
        productId: 23623,
        gender: 'Girls',
        category: 'Apparel',
        subCategory: 'Topwear',
        productType: 'Tops',
        colour: 'Pink',
        usage: 'Casual',
        productTitle: 'Doodle Kids Girls Pink I love Shopping Top',
        image: '23623.jpg',
        imageURL:
          'http://assets.myntassets.com/v1/images/style/properties/ef9685293a987f515492addd034006bf_images.jpg',
        price: '1,267.30',
      },
      {
        productId: 47154,
        gender: 'Girls',
        category: 'Apparel',
        subCategory: 'Bottomwear',
        productType: 'Capris',
        colour: 'Black',
        usage: 'Casual',
        productTitle: 'Gini and Jony Girls Black Capris',
        image: '47154.jpg',
        imageURL:
          'http://assets.myntassets.com/v1/images/style/properties/5158808a5bdd60c8c8af6999f8481160_images.jpg',
        price: '892.63',
      },
      {
        productId: 25520,
        gender: 'Girls',
        category: 'Apparel',
        subCategory: 'Topwear',
        productType: 'Tops',
        colour: 'White',
        usage: 'Casual',
        productTitle: 'Doodle Kids Girls City Chic White Top',
        image: '25520.jpg',
        imageURL:
          'http://assets.myntassets.com/v1/images/style/properties/416f7bd57546242fd72a817de0d517e5_images.jpg',
        price: '994.38',
      },
      {
        productId: 31120,
        gender: 'Girls',
        category: 'Apparel',
        subCategory: 'Topwear',
        productType: 'Tops',
        colour: 'Pink',
        usage: 'Casual',
        productTitle: 'Palm Tree Girls Pink Top',
        image: '31120.jpg',
        imageURL:
          'http://assets.myntassets.com/v1/images/style/properties/83f4ab34db71459ba1f80bb8992cf9d5_images.jpg',
        price: '1,028.81',
      },
      {
        productId: 31118,
        gender: 'Girls',
        category: 'Apparel',
        subCategory: 'Topwear',
        productType: 'Tops',
        colour: 'Red',
        usage: 'Casual',
        productTitle: 'Gini and Jony Girls Red Top',
        image: '31118.jpg',
        imageURL:
          'http://assets.myntassets.com/v1/images/style/properties/1e3b40d501f5fbbceeab3879db474932_images.jpg',
        price: '1,279.33',
      },
      {
        productId: 54923,
        gender: 'Girls',
        category: 'Apparel',
        subCategory: 'Bottomwear',
        productType: 'Capris',
        colour: 'Olive',
        usage: 'Casual',
        productTitle: 'Do u speak Green Girls Olive 3/4 Pant',
        image: '54923.jpg',
        imageURL:
          'http://assets.myntassets.com/v1/images/style/properties/Do-u-speak-Green-Girls-Olive-34-Pant_62311570aeebd7385030de554584a065_images.jpg',
        price: '1,490.65',
      },
      {
        productId: 31127,
        gender: 'Girls',
        category: 'Apparel',
        subCategory: 'Dress',
        productType: 'Dresses',
        colour: 'Black',
        usage: 'Casual',
        productTitle: 'Gini and Jony Girls Black Dress',
        image: '31127.jpg',
        imageURL:
          'http://assets.myntassets.com/v1/images/style/properties/1f7c87ee0ac12c35df8c1dd28e2cd692_images.jpg',
        price: '1,534.83',
      },
    ]);
    console.log('constructor');
    this.sample.set('constructor sample');
  }

  // ngOnInit() {
  //   // this._productService.getProducts().subscribe((res) => {
  //   //   this.products.update((currentValue) => [...res]);
  //   //   // this._cdr.markForCheck();
  //   // });
  //   // interval(4000)
  //   //   .pipe(map(() => this._productService.generateRandomStringArray(5, 10)))
  //   //   .subscribe(
  //   //     (data) => {
  //   //       this.products.set(Array.isArray(data) ? data : [data]);
  //   //       console.log(data);
  //   //       // Process your data here
  //   //     },
  //   //     (error) => {
  //   //       console.error('API Error:', error);
  //   //     }
  //   //   );
  //   console.log('ngOnInit');
  //   // this.sample = 'ngOnInit sample';
  //   this.sample.set('ngOnInit sample');
  // }

  ngOnChanges() {
    console.log('ngOnChanges');
    // this.sample = 'ngOnChanges sample';
    this.sample.set('ngOnChanges sample');
  }

  setV(val: string) {
    this.sample.set(val);
  }

  counter = 0;
  ngOnInit() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }

  ngDoCheck() {
    console.log('ngDoCheck was called');
  }

  setProduct(item: Tables<'products'>) {
    this.outputProduct = item;
  }
}
