import { Component, signal, WritableSignal } from '@angular/core';

import { CartProductsService } from '../services/cart-products.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  imgIndex: WritableSignal<number> = signal(1);
  quantity: WritableSignal<number> = signal(0);

  constructor(private cartProductService: CartProductsService) {}

  handleImgChange(action: string) {
    action === 'next'
      ? this.imgIndex() === 4
        ? null
        : this.imgIndex.set(this.imgIndex() + 1)
      : this.imgIndex() === 1
      ? null
      : this.imgIndex.set(this.imgIndex() - 1);
  }

  changeQuantity(action: string) {
    if (action === 'increase') {
      this.quantity.set(this.quantity() + 1);
    } else if (this.quantity() > 0) {
      this.quantity.set(this.quantity() - 1);
    }
  }

  addToCart() {
    if (this.quantity() > 0) {
      this.cartProductService.addProductToCart({
        img: './images/image-product-1-thumbnail.jpg',
        description: 'Fall Limited Edition Sneakers',
        price: 125,
        quantity: this.quantity(),
      });
    }
  }
}
