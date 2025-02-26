import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TranslateDirective, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(
    private router: Router,
    private menuService: MenuService
  ) {}

  /**
   * Schließt das Menü und navigiert zur Hauptseite.
   * Wenn ein Anker (Fragment) übergeben wird, navigiert er mit diesem Fragment.
   */
  closeMenu(anchor?: string): void {
    this.menuService.setMenuOpen(false);
    if (anchor) {
      this.router.navigate(['/'], { fragment: anchor });
    } else {
      this.router.navigate(['/']);
    }
  }
}
