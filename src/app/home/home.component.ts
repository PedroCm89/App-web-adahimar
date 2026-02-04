import { Component } from '@angular/core';
//import { ContactFormComponent } from "../contact-form/contact-form.component";
import { CommonModule } from '@angular/common'; // Para el [class] y [style]
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // 0 significa que todos están cerrados
  activeTab = 0;

  // Método para abrir/cerrar
  toggleTab(tabIndex: number): void {
    if (this.activeTab === tabIndex) {
      this.activeTab = 0; // Si hago clic en el que ya está abierto, lo cierro
    } else {
      this.activeTab = tabIndex; // Si no, abro el nuevo
    }
  }

}
