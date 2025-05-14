import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, CommonModule],
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
      // Simulación del envío del formulario
      console.log('Formulario enviado con éxito:', this.contactForm.value);
      alert('Mensaje enviado con éxito');
      this.contactForm.reset(); // Limpiar formulario después de enviar
    } else {
      alert('Por favor, completa todos los campos');
    }
  }
}
