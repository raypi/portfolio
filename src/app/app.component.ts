import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { AboutMeComponent } from './main/about-me/about-me.component';
import { HeroComponent } from './main/hero/hero.component';
import { MySkillsComponent } from './main/my-skills/my-skills.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { SayHiComponent } from './main/say-hi/say-hi.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, MainModule, AboutMeComponent, HeroComponent, MySkillsComponent, PortfolioComponent, SayHiComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}

// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'Portfolio';
// }
