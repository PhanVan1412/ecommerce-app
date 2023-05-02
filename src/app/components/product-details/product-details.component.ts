import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from 'src/app/home-product';
import { Products , productsList} from 'src/app/products';

import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  productsList: Products | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _cartService: CartService
    ) { }

  ngOnInit() {
      // Firts get the product id from the current route.
    const routeParams = this._route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //Find the product that corresponds with the id provided in the route
    this.product = productsList.find(product => product.id === productIdFromRoute);
  }
  addToCart(product: Product) {
    this._cartService.addToCart(product);
    window.alert('You product has been added to the cart!');
    this._cartService.changeList(product);
  }
}
