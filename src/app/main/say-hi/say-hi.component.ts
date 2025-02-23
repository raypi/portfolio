import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-say-hi',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './say-hi.component.html',
  styleUrls: ['./say-hi.component.scss']
})
export class SayHiComponent {
  // Schalter für Testzwecke: Wenn mailTest true ist, wird keine E-Mail gesendet.
  mailTest = true;

  privacyAccepted: boolean = false;
  nameError: boolean = false;
  emailError: boolean = false;
  messageError: boolean = false;

  contactData = {
    name: "",
    email: "",
    message: ""
  };

  // Konfiguration für den POST-Request
  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        // Hinweis: Der Header responseType wird hier nicht als HTTP-Header versendet, sondern
        // als Option an den HttpClient. Daher kannst du das in diesem Objekt auch weglassen
      },
    },
  };

  constructor(private http: HttpClient) {}

  validateName() {
    this.nameError = !this.contactData.name.trim();
  }

  validateEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    this.emailError = !this.contactData.email.trim() || !emailRegex.test(this.contactData.email);
  }

  validateMessage() {
    this.messageError = !this.contactData.message.trim();
  }

  isFormValid(): boolean {
    return !!this.contactData.name.trim() &&
           !!this.contactData.email.trim() &&
           !!this.contactData.message.trim() &&
           this.privacyAccepted;
  }

  sendMessage(ngForm: NgForm) {
    // Der Formular-Submit erfolgt nur, wenn das Formular valid ist.
    if (ngForm.submitted && ngForm.form.valid) {
      if (!this.mailTest) {
        this.http.post(
          this.post.endPoint,
          this.post.body(this.contactData),
          this.post.options
        ).subscribe({
          next: (response) => {
            console.info('Response:', response);
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
      } else {
        // Im Testmodus: Daten werden nur in der Konsole ausgegeben.
        console.info('Testmodus aktiviert. Folgende Daten wurden erfasst:', this.contactData);
        ngForm.resetForm();
      }
    }
  }
}
