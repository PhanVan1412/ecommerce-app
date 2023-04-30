import { Component } from '@angular/core';
import { navbarLeft, navbarRight } from 'src/app/navbar-list';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navbarLeft = navbarLeft;
  navbarRight = navbarRight;
}
