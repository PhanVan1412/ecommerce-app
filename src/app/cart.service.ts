import { Product } from './home-product';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  count: number = 0;

  private _productList = new BehaviorSubject({});
  currentList = this._productList.asObservable();

  constructor() {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    console.log("Check product list 19:", this.items);
    return this.items;
  }

  getCount() {
    this.count = this.items.length;
    console.log("Check product list: 25", this.items);
    return this.count;
  }

  changeList(product: any) {
    console.log("Change list: 33", product);
    this._productList.next(product);
    console.log("check this count", this.count);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
