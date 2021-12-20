import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MycreditComponent } from 'src/app/pages/mycredit/mycredit.component';
import { SucursalComponent } from 'src/app/pages/sucursal/sucursal.component';
import { HomeComponent } from '../../../pages/home/home.component';
import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: 'main',
    component: MainPage,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'credito',
        component: MycreditComponent
      },
      {
        path: 'sucursales',
        component: SucursalComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
