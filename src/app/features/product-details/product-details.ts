import { CommonModule } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  input,
  model,
  OnChanges,
  OnDestroy,
  OnInit,
  output,
  ViewEncapsulation,
} from '@angular/core';
import { ProductComponent } from '@features/product/product.component';
import { Tables } from '@utils/database.types';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
  imports: [CommonModule, ButtonModule],
  // encapsulation: ViewEncapsulation.None,
  // encapsulation: ViewEncapsulation.Emulated,
  encapsulation: ViewEncapsulation.ShadowDom,
  // styles: 'li {color: green;}',
})
export class ProductDetails
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  product = input<Tables<'products'>>();
  outV = output<string>();
  sample = model('');
  constructor() {
    this.sample.set('constructor sample');
  }

  ngOnInit() {
    console.log('ProductDetails ngOnInit');
    this.sample.set('ngOnInit sample');
  }

  ngOnChanges() {
    console.log('ProductDetails ngOnChanges');
    this.sample.set('ngOnChanges sample');
  }

  ngDoCheck() {
    console.log('ProductDetails ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ProductDetails ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ProductDetails ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ProductDetails ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ProductDetails ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ProductDetails ngOnDestroy');
  }

  outVariable() {
    this.outV.emit('outVariable');
  }
}
