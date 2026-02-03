
import { Routes } from '@angular/router';

// Importa los componentes (pueden ser standalone o declarados en un módulo)
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: InformationComponent },
  { path: 'contacto', component: ContactPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/home' } // Ruta wildcard para redireccionar rutas inválidas
];

