import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  // Centro el mapa en un punto medio entre Marbella y San Pedro
  center: google.maps.LatLngLiteral = { lat: 36.4950, lng: -4.9350 };
  zoom = 12;

  // Opciones del mapa
  mapOptions: google.maps.MapOptions = {
    scrollwheel: false, // Para que no haga zoom al hacer scroll en la página
    mapTypeControl: false,
    streetViewControl: true,
  };

  // Marcadores de las sedes
  markers = [
    {
      position: { lat: 36.5110, lng: -4.8870 }, // Sede Marbella
      title: 'Sede Marbella - Plaza de la Concordia, 3',
      label: 'M'
    },
    {
      position: { lat: 36.4880, lng: -4.9890 }, // Sede San Pedro
      title: 'Sede San Pedro - Calle Caravaca, 1',
      label: 'S'
    }
  ];
}
