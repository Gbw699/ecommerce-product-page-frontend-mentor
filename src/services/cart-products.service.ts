import { Injectable, signal, WritableSignal } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root',
})
export class CartProductsService {
  cartProducts: WritableSignal<IProduct[]> = signal([
    {
      img: './images/image-product-1-thumbnail.jpg',
      description: 'Fall Limited Edition Sneakers',
      price: 125,
      quantity: 3,
    },
  ]);

  constructor() {}

  addProductToCart(product: IProduct) {
    let newCartProducts = this.cartProducts();

    newCartProducts.push(product);

    this.cartProducts.set([...newCartProducts]);
    console.log(this.cartProducts());
  }

  clearCart() {
    this.cartProducts.set([]);
  }
}
