import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart';
import { CartItem } from './cart-item/cart-item';
import { OrderSummry } from './order-summry/order-summry';

@Component({
  selector: 'app-cart',
  imports: [CartItem, OrderSummry],
  template: `
    <div class="content">
      <!-- <h1 class="font-bold text-2xl">Orders</h1> -->
      <app-order-summry />
      @if (cartService.cart().length !== 0) { @for (item of cartService.cart();
      track item.id){
      <app-cart-item [item]="item" />
      } } @else {
      <h3 class=" ml-12 font-bold text-3xl">No Item Added</h3>
      }
    </div>
  `,
  styles: `
  .content {
    margin: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  `,
})
export class Cart {
  cartService = inject(CartService);
}
