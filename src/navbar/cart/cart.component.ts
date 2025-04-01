import {
  Component,
  computed,
  HostListener,
  Signal,
  viewChild,
} from '@angular/core';

import { CartService } from '../../services/cart.service';
import { CartProductsService } from '../../services/cart-products.service';

import { IProduct } from '../../interfaces/IProduct';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartFlag = computed(() => {
    return this.cartService.cartFlag();
  });
  cartProducts: Signal<IProduct[]> = computed(() => {
    return this.cartProductsService.cartProducts()
      ? this.cartProductsService.cartProducts()
      : ([] as IProduct[]);
  });
  container: any = viewChild('container');

  constructor(
    private cartService: CartService,
    private cartProductsService: CartProductsService
  ) {}

  @HostListener('document:click', ['$event'])
  closeCart(event: any) {
    const container = this.container()?.nativeElement;
    if (!container) return;

    const { left, right, bottom } = container.getBoundingClientRect();

    if (
      (event.clientX < left && event.clientX !== 0) ||
      (event.clientX > right && event.clientX !== 0) ||
      (event.clientY > bottom && event.clientY !== 0)
    ) {
      this.cartService.setCartFlag(false);
    }
  }

  handleDelete() {
    this.cartService.setCartFlag(false);
    this.cartProductsService.clearCart();
  }

  handleCheckout() {
    this.cartService.setCartFlag(false);
    this.cartProductsService.clearCart();
  }
}
