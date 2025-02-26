import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SayHiComponent } from './say-hi/say-hi.component';
import { ReferencesComponent } from './references/references.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeroComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent, SayHiComponent, ReferencesComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    // Warte einen Tick, bis die Elemente im DOM sind
    setTimeout(() => {
      this.route.fragment.subscribe((fragment: string | null) => {
        if (fragment) {
          const element = document.getElementById(fragment);
          if (element) {
            const headerOffset = 100; // Optional: Passe den Offset für den Header an
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          } else {
            console.warn(`Element with id "${fragment}" not found.`);
          }
        }
      });
    }, 0);
  }
}
