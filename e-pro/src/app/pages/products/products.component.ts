import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  cart = faCartShopping;
  products = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  start = faStar;
}
