import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-say-hi',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe, TranslateDirective, RouterModule],
  templateUrl: './say-hi.component.html',
  styleUrls: ['./say-hi.component.scss']
})
export class SayHiComponent {

   http = inject(HttpClient);
  // Schalter für Testzwecke: Wenn mailTest true ist, wird keine E-Mail gesendet.
  mailTest = false;
  successMessage: string = '';
  privacyAccepted: boolean = false;
  nameError: boolean = false;
  emailError: boolean = false;
  messageError: boolean = false;
  messageSent: boolean = false;

  contactData = {
    name: "",
    email: "",
    message: ""
  };

  // Konfiguration für den POST-Request
  post = { 
    endPoint: 'https://developing-sailor.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
        
      },
    },
  };

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
    return !this.messageSent &&
           !!this.contactData.name.trim() &&
           !!this.contactData.email.trim() &&
           !!this.contactData.message.trim() &&
           this.privacyAccepted;
  }
  

  sendMessage(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      if (!this.mailTest) {
        this.http.post(
          this.post.endPoint,
          this.post.body(this.contactData),
          this.post.options
        ).subscribe({
          next: (response) => {
            console.info('Response:', response);
            this.successMessage = 'Ihre Nachricht wurde erfolgreich gesendet.';
            ngForm.resetForm();
            this.privacyAccepted = false; // Checkbox zurücksetzen
            this.messageSent = true; // Weitere Sendungen verhindern
            setTimeout(() => {
              this.successMessage = '';
            }, 5000);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
      } else {
        console.info('Testmodus aktiviert. Folgende Daten wurden erfasst:', this.contactData);
        this.successMessage = 'Ihre Nachricht wurde erfolgreich gesendet (Testmodus).';
        ngForm.resetForm();
        this.privacyAccepted = false; // Checkbox zurücksetzen
        this.messageSent = true; // Weitere Sendungen verhindern
        setTimeout(() => {
          this.successMessage = '';
        }, 5000);
      }
    }
  }

  constructor(private router: Router) {}

  navigateToLegalNotice() {
    this.router.navigate(['/legalnotice'], { fragment: 'legal-notice' });
  }

  scrollToHero(): void {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
    
}

