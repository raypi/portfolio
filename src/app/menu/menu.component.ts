import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, TranslatePipe,TranslateDirective ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'] // Beachte das "s"
})
export class MenuComponent {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}