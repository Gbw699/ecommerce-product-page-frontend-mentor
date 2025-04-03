import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

import { CartProductsService } from '../services/cart-products.service';
import { MainImgService } from '../services/main-img.service';
import { LightboxService } from '../services/lightbox.service';

import { LightboxComponent } from '../lightbox/lightbox.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [LightboxComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  imgIndex: Signal<number> = computed(() => {
    return this.mainImgService.imgIndex();
  });
  quantity: WritableSignal<number> = signal(0);

  constructor(
    private cartProductService: CartProductsService,
    private mainImgService: MainImgService,
    private lightboxService: LightboxService
  ) {}

  handleLightbox() {
    if (window.innerWidth >= 730) {
      this.lightboxService.setLightboxFlag(true);
    }
  }

  handleImgChange(action: string) {
    action === 'next'
      ? this.imgIndex() === 4
        ? null
        : this.mainImgService.setImgIndex(this.imgIndex() + 1)
      : this.imgIndex() === 1
      ? null
      : this.mainImgService.setImgIndex(this.imgIndex() - 1);
  }

  handleImgChangeWithThumbnail(index: number) {
    this.mainImgService.setImgIndex(index);
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
