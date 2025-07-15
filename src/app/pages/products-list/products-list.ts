import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.models';
import { ProductCard } from './product-card/product-card';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  template: `
    <div class="pro">
      @for (product of products(); track product.id) {
      <app-product-card [product]="product" />
      }
    </div>
  `,
  styles: `
  .pro {
    // display: grid;
    // grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    // gap: 20px;
    // margin: 0 20px;
    display: flex;
    justify-content: flex-start;
    gap : 30px;
    padding: 20px;
    flex-wrap : wrap;
  }
  `,
})
export class ProductsList {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      stock: 10,
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      stock: 0,
    },
    {
      id: 3,
      title: 'Mens Cotton Jacket',
      price: 55.99,

      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      stock: 5,
    },
    {
      id: 4,
      title: 'Mens Casual Slim Fit',
      price: 15.99,
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      stock: 7,
    },
    {
      id: 5,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      stock: 10,
    },
    {
      id: 6,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      stock: 0,
    },
    {
      id: 7,
      title: 'Mens Cotton Jacket',
      price: 55.99,

      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      stock: 5,
    },
    {
      id: 8,
      title: 'Mens Casual Slim Fit',
      price: 15.99,
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      stock: 7,
    },
  ]);
}
