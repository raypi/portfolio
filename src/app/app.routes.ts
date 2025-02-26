import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { LegalnoticeComponent } from './legalnotice/legalnotice.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'legalnotice', component: LegalnoticeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Stellt die Scrollposition beim Navigieren wieder her
      anchorScrolling: 'enabled',           // Aktiviert das automatische Scrollen zu Ankern
      scrollOffset: [0, 100]                // Offset, z. B. um einen festen Header zu berücksichtigen
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
