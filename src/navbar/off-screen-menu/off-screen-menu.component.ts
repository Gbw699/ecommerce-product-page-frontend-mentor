import {
  Component,
  computed,
  HostListener,
  Signal,
  viewChild,
} from '@angular/core';

import { OffScreenMenuService } from '../../services/off-screen-menu.service';

@Component({
  selector: 'app-off-screen-menu',
  standalone: true,
  imports: [],
  templateUrl: './off-screen-menu.component.html',
  styleUrl: './off-screen-menu.component.scss',
})
export class OffScreenMenuComponent {
  menuFlag: Signal<boolean> = computed(() => {
    return this.offScreenMenuService.menuFlag();
  });
  offScreenMenu: any = viewChild('offScreenMenu');

  constructor(private offScreenMenuService: OffScreenMenuService) {}

  @HostListener('document:click', ['$event'])
  closeCart(event: any) {
    const container = this.offScreenMenu()?.nativeElement.firstChild;
    if (!container) return;

    const { left, right } = container.getBoundingClientRect();

    if (event.clientX > right && left === 0) {
      this.offScreenMenuService.setMenuFlag(false);
    }
  }

  toggleMenu() {
    this.offScreenMenuService.setMenuFlag(false);
  }
}
