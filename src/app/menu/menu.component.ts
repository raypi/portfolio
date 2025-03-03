// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { RouterModule, Router } from '@angular/router';
// import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
// import { MenuService } from '../services/menu.service';

// @Component({
//   selector: 'app-menu',
//   standalone: true,
//   imports: [CommonModule, TranslatePipe, TranslateDirective, RouterModule],
//   templateUrl: './menu.component.html',
//   styleUrls: ['./menu.component.scss']
// })
// export class MenuComponent {
//   constructor(
//     private router: Router,
//     private menuService: MenuService
//   ) {}

//   /**
//    * Schließt das Menü und navigiert zur Hauptseite.
//    * Wenn ein Anker (Fragment) übergeben wird, navigiert er mit diesem Fragment.
//    */
//   closeMenu(anchor?: string): void {
//     this.menuService.setMenuOpen(false);
//     if (anchor) {
//       this.router.navigate(['/'], { fragment: anchor });
//     } else {
//       this.router.navigate(['/']);
//     }
//   }
// }


import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { MenuService } from '../services/menu.service';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TranslateDirective, RouterModule, FooterComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isMenuOpen = false;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.menuOpen$.subscribe((open: boolean) => {
      this.isMenuOpen = open;
      console.log('Menu state changed:', open); // Debug log
    });
  }

  closeMenu(): void {
    this.menuService.setMenuOpen(false);
  }

  navigateAndClose(fragment: string): void {
    window.location.hash = fragment;
    this.closeMenu();
  }
}
