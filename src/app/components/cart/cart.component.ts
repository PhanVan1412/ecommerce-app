import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  
  items = this._cartService.getItems();

  constructor(
    private _cartService: CartService
  ){ }

}
