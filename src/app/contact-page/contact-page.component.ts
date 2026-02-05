import { MapComponent } from './../components/map/map.component';
import { Component } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';


@Component({
  selector: 'app-contact-page',
  imports: [ContactFormComponent, MapComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

}
