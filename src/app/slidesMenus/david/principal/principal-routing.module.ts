import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { PrincipalComponent } from './principal.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent
  },
  {path: 'home', component: HomeComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }

