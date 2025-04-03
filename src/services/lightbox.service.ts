import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LightboxService {
  lightboxFlag: WritableSignal<boolean> = signal(false);

  constructor() {}

  setLightboxFlag(value: boolean) {
    this.lightboxFlag.set(value);
  }
}
