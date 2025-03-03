import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MenuComponent } from './menu/menu.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet, // RouterOutlet hier hinzufügen
    TranslatePipe,
    TranslateDirective,
    MenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Achte auf das "s"
})
export class AppComponent {
  title = 'Portfolio';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en', 'es', 'ru']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}


