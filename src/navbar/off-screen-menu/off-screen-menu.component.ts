import { Component, computed, Signal, viewChild } from '@angular/core';
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

  toggleMenu() {
    this.offScreenMenu()?.nativeElement.classList.toggle('open-menu');
    this.offScreenMenuService.setMenuFlag(false);
  }
}
