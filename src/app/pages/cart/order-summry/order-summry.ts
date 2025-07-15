import { Component, computed, inject, signal } from '@angular/core';
import { CartService } from '../../../services/cart';

@Component({
  selector: 'app-order-summry',
  imports: [],
  template: `
    <div class="bg-slate-100 p-6 rounded-xl shadow-xl border m-2">
      <h3 class="text-2xl font-bold">Order Summary</h3>
      <div class="flex flex-col font-bold">
        <span class=" text-lg">total</span>
        <span>$ {{ total() }}</span>
      </div>
    </div>
  `,
  styles: ``,
})
export class OrderSummry {
  cartService = inject(CartService);

  total = computed(() => {
    let total = 0;
    for (const item of this.cartService.cart()) {
      total += item.price;
    }
    return total.toFixed(2);
  });
}
