import { Component, computed, Signal } from '@angular/core';

import { OffScreenMenuService } from '../services/off-screen-menu.service';
import { CartService } from '../services/cart.service';

import { OffScreenMenuComponent } from './off-screen-menu/off-screen-menu.component';
import { CartComponent } from './cart/cart.component';
import { CartProductsService } from '../services/cart-products.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [OffScreenMenuComponent, CartComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  quantityOfProductsInsideCart: Signal<number> = computed(() => {
    return this.cartProductsService.cartProducts()[
      this.cartProductsService.cartProducts().length - 1
    ]?.quantity;
  });

  constructor(
    private offScreenMenuService: OffScreenMenuService,
    private cartService: CartService,
    private cartProductsService: CartProductsService
  ) {}

  toggleMenu() {
    this.offScreenMenuService.setMenuFlag(true);
    this.cartService.setCartFlag(false);
  }

  toggleCart() {
    console.log('hola');
    console.log(this.cartService.cartFlag());

    this.cartService.setCartFlag(!this.cartService.cartFlag());
  }
}
