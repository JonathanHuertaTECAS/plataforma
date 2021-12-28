import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractComponent } from 'src/app/pages/contract/contract.component';
import { MycreditComponent } from 'src/app/pages/mycredit/mycredit.component';
import { PaymentDateComponent } from 'src/app/pages/payment-date/payment-date.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { SucursalComponent } from 'src/app/pages/sucursal/sucursal.component';
import { HomeComponent } from '../../../../pages/home/home.component';
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
      },
      {
        path: 'fecha-de-pago',
        component: PaymentDateComponent
      },
      {
        path: 'contratos',
        component: ContractComponent
      },
      {
        path: 'perfil',
        component: ProfileComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
