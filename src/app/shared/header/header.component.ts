import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
    languages = [
      { language: 'English', img: 'assets/img/flackeGb.png', link: '#', active: true },
      { language: 'German',  img: 'assets/img/flackeGermany.png', link: '#', active: false },
      { language: 'Spanish', img: 'assets/img/flackeSpain.png', link: '#', active: false },
      { language: 'Russian', img: 'assets/img/flackeRussia.png', link: '#', active: false }
    ];

    onLanguageSelect(selectedLang: any, event: Event) {
      event.preventDefault(); // Verhindert das Standardverhalten des Links
      // Setze alle Sprachen auf inaktiv
      this.languages.forEach(lang => lang.active = false);
      // Aktiviere die ausgewählte Sprache
      selectedLang.active = true;
      // Hier kannst du später den Sprachwechsel implementieren
    }   
}
