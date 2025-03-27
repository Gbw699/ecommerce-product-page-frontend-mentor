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

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartFlag = computed(() => {
    return this.cartService.cartFlag();
  });
  cartProducts: Signal<IProduct[]> = computed(() => {
    return this.cartProductsService.cartProducts();
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

    const { top, left, right, bottom } = container.getBoundingClientRect();

    if (
      event.clientX < left ||
      event.clientX > right ||
      event.clientY > bottom
    ) {
      this.cartService.setCartFlag(false);
    }
  }
}
