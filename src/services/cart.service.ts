import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartFlag: WritableSignal<boolean> = signal(false);

  constructor() {}

  setCartFlag(value: boolean) {
    this.cartFlag.set(value);
  }
}
