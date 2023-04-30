import { Component } from '@angular/core';
import { products } from 'src/app/home-product';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent {
  products = products;
  handelAdd($event: any) {
    console.log("handelAdd: ", $event);
  }
}
