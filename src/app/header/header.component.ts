import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public isMenuOpen = false;

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public closeMenu(): void {
    this.isMenuOpen = false;
  }

  // Escuchamos el cambio de tamaño de la ventana
  @HostListener('window:resize')
  onResize(): void {
    // Si la pantalla es de escritorio (>= 768px), cerramos el menú móvil
    if (window.innerWidth >= 768) {
      this.closeMenu();
    }
  }
}
