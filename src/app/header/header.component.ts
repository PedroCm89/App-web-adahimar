import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isDropdownOpen = false;

  /**
   * Alterna la visibilidad del menú desplegable.
   * Se utiliza event.stopPropagation() para evitar que el clic se propague al contenedor.
   */
  toggleDropdown(event: Event): void {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  /**
   * Cierra el menú si se hace clic fuera del contenedor del dropdown.
   */
  closeDropdown(event: Event): void {
    const targetElement = event.target as HTMLElement;
    if (!targetElement.closest('.dropdown-container')) {
      this.isDropdownOpen = false;
    }
  }
}
