import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-say-hi',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './say-hi.component.html',
  styleUrl: './say-hi.component.scss'
})
export class SayHiComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  privacyAccepted: boolean = false;
  nameError: boolean = false;
  emailError: boolean = false;
  messageError: boolean = false;

  validateName() {
    this.nameError = !this.name.trim();
  }

  validateEmail() {
    this.emailError = !this.email.trim();
  }

  validateMessage() {
    this.messageError = !this.message.trim();
  }

  isFormValid(): boolean {
    return !!this.name.trim() && !!this.email.trim() && !!this.message.trim() && this.privacyAccepted;
  }
  

  sendMessage() {
    if (this.isFormValid()) {
      // später übergabe an mail einbauen
      console.log('Form submitted', {
        name: this.name,
        email: this.email,
        message: this.message
      });
    }
  }
}
