import { Component } from '@angular/core';
import { ContactFormComponent } from "../contact-form/contact-form.component";

@Component({
  selector: 'app-home',
  imports: [ContactFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
