import { Injectable, signal, WritableSignal } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root',
})
export class CartProductsService {
  cartProducts: WritableSignal<IProduct[]> = signal([]);

  constructor() {}

  addProductToCart(product: IProduct) {
    let newCartProducts = this.cartProducts();

    newCartProducts.push(product);

    this.cartProducts.set([...newCartProducts]);
    console.log(this.cartProducts());
  }
}
