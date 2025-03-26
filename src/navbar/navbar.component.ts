import { Component } from '@angular/core';
import { OffScreenMenuComponent } from './off-screen-menu/off-screen-menu.component';
import { OffScreenMenuService } from '../services/off-screen-menu.service';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [OffScreenMenuComponent, CartComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private offScreenMenuService: OffScreenMenuService) {}

  toggleMenu() {
    this.offScreenMenuService.setMenuFlag(true);
  }
}
