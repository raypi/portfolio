import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  languages: {
    language: string;
    img: string;
    code: string;
    active: boolean;
  }[] = [
    { language: 'English', img: 'assets/img/flackeGb.png', code: 'en', active: true },
    { language: 'German', img: 'assets/img/flackeGermany.png', code: 'de', active: false },
    { language: 'Spanish', img: 'assets/img/flackeSpain.png', code: 'es', active: false },
    { language: 'Russian', img: 'assets/img/flackeRussia.png', code: 'ru', active: false }
  ];

  // Nur ein Konstruktor mit beiden Injections:
  constructor(private router: Router, private translate: TranslateService) {}

  navigateToMenu() {
    this.router.navigate(['/menu']);
  }

  changeLanguage(languageCode: string) {
    this.translate.use(languageCode);
    // Setzt die aktive Sprache
    this.languages.forEach(lang => lang.active = lang.code === languageCode);
  }

  onLanguageSelect(lang: any, event: Event) {
    event.preventDefault();
    this.changeLanguage(lang.code);
  }
}
