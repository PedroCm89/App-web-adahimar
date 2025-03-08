import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule,RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();


  socialLinks = [
    { icon: 'uil uil-instagram', url: 'https://www.instagram.com/adahimartdah/' },
    { icon: 'uil uil-facebook', url: 'https://www.facebook.com/Adahimar.tdah/?locale=es_ES' },
    { icon: 'uil uil-twitter-alt', url: 'https://x.com/adahimar_tdah' }
  ];
  /*sponsorLogos = [
    'assets/logo_adahimar.svg',
    'assets/logo_ayuntamiento.jpg'
  ];*/

}
