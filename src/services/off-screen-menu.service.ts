import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OffScreenMenuService {
  menuFlag: WritableSignal<boolean> = signal(false);

  constructor() {}

  setMenuFlag(flag: boolean) {
    this.menuFlag.set(flag);
  }
}
