import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'menu', component: MenuComponent },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
