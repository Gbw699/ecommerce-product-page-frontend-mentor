import { Component, viewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  offScreenMenu: any = viewChild('offScreenMenu');

  toggleMenu() {
    this.offScreenMenu()?.nativeElement.classList.toggle('open-menu');
  }
}
