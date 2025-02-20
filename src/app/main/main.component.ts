import { Component } from '@angular/core';
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
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
