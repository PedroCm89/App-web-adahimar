import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public isMenuOpen = false;

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Menu state:', this.isMenuOpen);
  }

  public closeMenu(): void {
    if (!this.isDesktop()) {
      this.isMenuOpen = false;
    }
  }

  isDesktop(): boolean {
    return window.innerWidth >= 768;
  }

  @HostListener('window:resize')
  onResize() {
    if (this.isDesktop()) this.isMenuOpen = false;
  }
}
