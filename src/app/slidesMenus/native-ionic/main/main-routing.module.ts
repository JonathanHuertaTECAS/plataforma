import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../../pages/home/home.component';
import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: 'main',
    component: MainPage,
    children:[
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class MainPageRoutingModule {}
