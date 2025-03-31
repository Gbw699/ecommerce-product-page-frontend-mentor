import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainImgService {
  imgIndex: WritableSignal<number> = signal(1);

  constructor() {}

  setImgIndex(index: number) {
    this.imgIndex.set(index);
  }
}
