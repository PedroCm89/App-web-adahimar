import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-workshops',
  imports: [CommonModule, RouterModule],
  templateUrl: './workshops.component.html',
  styleUrl: './workshops.component.css'
})
export class WorkshopsComponent {
  activeWorkshop: string | null = null;

  toggleWorkshop(id: string): void {
    this.activeWorkshop = this.activeWorkshop === id ? null : id;
  }
}
