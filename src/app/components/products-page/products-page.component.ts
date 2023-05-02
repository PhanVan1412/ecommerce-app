import { Component } from '@angular/core';
import { productsList } from 'src/app/products';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {
  productsList = productsList;
}
