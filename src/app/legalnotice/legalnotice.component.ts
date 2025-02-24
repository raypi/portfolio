import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-legalnotice',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './legalnotice.component.html',
  styleUrl: './legalnotice.component.scss'
})
export class LegalnoticeComponent {
  constructor(private router: Router) {}

  toggleLegalNotice(): void {
    // Navigiere zurück zur Mainpage
    this.router.navigate(['/']);
  }
}
