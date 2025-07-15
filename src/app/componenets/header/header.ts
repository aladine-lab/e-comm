import { Component, inject } from '@angular/core';
import { PrimaryButton } from '../primary-button/primary-button';
import { CartService } from '../../services/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton, RouterLink],
  template: `
    <div class="header">
      <span routerLink="" class="cursor-pointer font-bold text-xl"
        >My Store</span
      >
      <app-primary-button
        [label]="'Cart (' + cartService.cart().length + ')'"
        routerLink="/cart"
      />
    </div>
  `,
  styles: `
    .header {
    background-color : #ddd;
    padding : 1rem;
    box-shadow: 0 2px 10px;
    display:flex;
    justify-content: space-between;
    align-items: center;
  }`,
})
export class Header {
  cartService = inject(CartService);
}
