import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.models';
import { PrimaryButton } from '../../../componenets/primary-button/primary-button';
import { CartService } from '../../../services/cart';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButton],
  template: `
    <div class="products">
      <div class="img">
        <img [src]="product().image" alt="" />
      </div>
      <div class="content">
        <p>{{ product().title }}</p>
        <p>$ {{ product().price }}</p>
        <app-primary-button
          label="Add to Cart"
          class="absolute bottom-3 right-8 w-5/6"
          (btnClicked)="cartService.addToCart(product())"
        />
      </div>
      <span>
        @if (product().stock) {
        {{ product().stock }} left } @else { Out Of Stock }
      </span>
    </div>
  `,
  styles: `
  span {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: larger;
  }
  .img {
    text-align: center;
    margin-bottom : 20px;
  }
  img {
    width : 150px;
    height: 200px;
  }
  .products {
    margin-top : 25px;
    border : 1px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    padding : 20px;
    margin-bottom : 25px;
    width: 350px;
    height : 400px;
    border-radius : 15px;
    position :relative;
  }
  `,
})
export class ProductCard {
  cartService = inject(CartService);
  product = input.required<Product>();
}
