import { Component, OnInit } from '@angular/core';
import { navbarLeft, navbarRight } from 'src/app/navbar-list';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  navbarLeft = navbarLeft;
  navbarRight = navbarRight;
  product: any;
  count: number = 0;
  constructor(
    private _cartService: CartService
  ) { }

  ngOnInit() {
      this._cartService.currentList.subscribe(product => {
        console.log("check product 21", product);
        if(Object.keys(product).length !== 0) {
          this.count += 1;
        }
      });
  }

}
