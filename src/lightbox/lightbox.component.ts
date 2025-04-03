import { Component, computed, Signal } from '@angular/core';
import { LightboxService } from '../services/lightbox.service';
import { CartService } from '../services/cart.service';
import { MainImgService } from '../services/main-img.service';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.scss',
})
export class LightboxComponent {
  lightboxFlag: Signal<boolean> = computed(() => {
    return this.lightboxService.lightboxFlag();
  });
  imgIndex: Signal<number> = computed(() => {
    return this.mainImgService.imgIndex();
  });

  constructor(
    private lightboxService: LightboxService,
    private mainImgService: MainImgService
  ) {}

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

  handleCloseLightbox() {
    this.lightboxService.setLightboxFlag(false);
  }
}
