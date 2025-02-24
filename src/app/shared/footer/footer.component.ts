import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  isLegalNoticeOpen = false;

  socialMedia = [
    { img: 'assets/img/6. footerlinkedin.png', link: '#' },
    { img: 'assets/img/4. footergithub.png', link: '#' },
    { img: 'assets/img/5. footeremail.png', link: '#' }
  ];

  constructor(private router: Router) {}

  toggleLegalNotice(): void {
    this.isLegalNoticeOpen = !this.isLegalNoticeOpen;
    if (this.isLegalNoticeOpen) {
      this.router.navigate(['/legalnotice']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
