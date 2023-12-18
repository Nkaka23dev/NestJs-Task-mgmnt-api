import { Routes } from '@angular/router';
import { ProductsComponent } from '../pages/products/products.component';
import { CheckoutComponent } from '../pages/checkout/checkout.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
];
