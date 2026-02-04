import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators,  ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializar el formulario
    this.contactForm = this.fb.group({
      name: ['', Validators.required],  // El campo nombre es obligatorio
      email: ['', [Validators.required, Validators.email]],  // El campo email es obligatorio y debe ser un email válido
      message: ['', Validators.required]  // El campo mensaje es obligatorio
    });
  }

  // Método para manejar el envío del formulario
onSubmit() {
  if (this.contactForm.valid) {
    const body = new URLSearchParams();
    body.set('form-name', 'contact');
    body.set('name', this.contactForm.value.name ?? '');
    body.set('email', this.contactForm.value.email ?? '');
    body.set('message', this.contactForm.value.message ?? '');

    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString()
    })
    .then(() => {
      alert('¡Mensaje enviado con éxito a la asociación!');
      this.contactForm.reset();
    })
    .catch((error) => {
      console.error('Error de Netlify:', error);
      alert('Hubo un error al enviar el mensaje.');
    });
  }
}

}
