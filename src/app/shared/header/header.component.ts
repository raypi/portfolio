// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [TranslatePipe, TranslateDirective],
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent {
//   isMenuOpen = false;

//   languages: {
//     language: string;
//     img: string;
//     code: string;
//     active: boolean;
//   }[] = [
//     { language: 'English', img: 'assets/img/flackeGb.png', code: 'en', active: true },
//     { language: 'German', img: 'assets/img/flackeGermany.png', code: 'de', active: false },
//     { language: 'Spanish', img: 'assets/img/flackeSpain.png', code: 'es', active: false },
//     { language: 'Russian', img: 'assets/img/flackeRussia.png', code: 'ru', active: false }
//   ];

//   // Nur ein Konstruktor mit beiden Injections:
//   constructor(private router: Router, private translate: TranslateService) {}

//   toggleMenu() {
//     this.isMenuOpen = !this.isMenuOpen;
//     if (this.isMenuOpen) {
//       this.router.navigate(['/menu']);
//     } else {
//       this.router.navigate(['/']);
//     }
//   }


//   changeLanguage(languageCode: string) {
//     this.translate.use(languageCode);
//     // Setzt die aktive Sprache
//     this.languages.forEach(lang => lang.active = lang.code === languageCode);
//   }

//   onLanguageSelect(lang: any, event: Event) {
//     event.preventDefault();
//     this.changeLanguage(lang.code);
//   }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;

  languages = [
    { language: 'English', img: 'assets/img/flackeGb.png', code: 'en', active: true },
    { language: 'German', img: 'assets/img/flackeGermany.png', code: 'de', active: false },
    { language: 'Spanish', img: 'assets/img/flackeSpain.png', code: 'es', active: false },
    { language: 'Russian', img: 'assets/img/flackeRussia.png', code: 'ru', active: false }
  ];

  constructor(
    private router: Router,
    private translate: TranslateService,
    private menuService: MenuService
  ) {
    // Abonniere den Service, um den Zustand zu erhalten
    this.menuService.menuOpen$.subscribe((open: boolean) => this.isMenuOpen = open);
    // Hinweis: Wir entfernen hier die automatische Rücksetzung über Router-Events!
  }

  toggleMenu() {
    const newState = !this.isMenuOpen;
    this.menuService.setMenuOpen(newState);
    if (newState) {
      this.router.navigate(['/menu']);
    } else {
      this.router.navigate(['/']);
    }
  }

  // Diese Methode kannst du in den Menü-Links (z.B. in der Menü-Seite) aufrufen, wenn ein Link geklickt wird.
  closeMenu() {
    this.menuService.setMenuOpen(false);
    this.router.navigate(['/']);
  }

  changeLanguage(languageCode: string) {
    this.translate.use(languageCode);
    this.languages.forEach(lang => lang.active = lang.code === languageCode);
  }

  onLanguageSelect(lang: any, event: Event) {
    event.preventDefault();
    this.changeLanguage(lang.code);
  }
}
