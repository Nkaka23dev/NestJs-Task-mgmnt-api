import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBarsStaggered,
  faCaretDown,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CheckoutComponent } from '../../pages/checkout/checkout.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CheckoutComponent,
    FontAwesomeModule,
    RouterLink,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isOpen = false;

  handleClick(): void {
    console.log('button is clicked');
    this.isOpen = !this.isOpen;
  }
  caretDown = faCaretDown;
  cart = faCartShopping;
  search = faSearch;
  user = faUser;
  menu = faBarsStaggered;

  menuItems = [{ label: 'Home' }, { label: 'Pages' }, { label: 'contact us' }];
  products = [
    'Fashion',
    'Fishion 1',
    'Fishion 2',
    'Fishion 3',
    'Fishion 4',
    'Electornics 2',
    'Electornics 3',
  ];
  categories = ['New Arrival', 'Best Sellers', 'Featured', 'Special Offer'];
}
