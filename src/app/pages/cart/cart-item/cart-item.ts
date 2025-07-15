import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.models';
import { Button } from '../../../componenets/button/button';
import { CartService } from '../../../services/cart';

@Component({
  selector: 'app-cart-item',
  imports: [Button],
  template: `
    <div class="items">
      <img [src]="item().image" alt="" />
      <div class="details">
        <p>{{ item().title }}</p>
        <span class="font-bold">$ {{ item().price }}</span>
      </div>
      <div class="btn">
        <app-button
          label="Remove"
          (btnClicked)="cartService.removeFromCart(item().id)"
        />
      </div>
    </div>
  `,
  styles: `
  .btn {

  }
  .details {
    flex-grow : 2;
  }

  p {
    font-weight : bold;
    font-size: 20px;
    margin-bottom : 10px;
  }
  span {
    font-size : 15px;
  }
  img {
    width :80px;
    margin-right: 20px;
  }
  .items {
    display : flex;
    align-items : center;
    justify-content : space-between;
    gap : 20px;
    border: 1px solid transparent;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.5);
    min-width : 600px;
  }`,
})
export class CartItem {
  item = input.required<Product>();

  cartService = inject(CartService);
}
