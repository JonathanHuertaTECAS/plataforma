import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternoPage } from './interno.page';
import { HomePage } from '../home/home.page';
import { LoginPage } from '../login/login.page';

const routes: Routes = [
    {
      path: '',
      component: HomePage,
    },
    {
      path: 'home',
      loadChildren: () => import('./../home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'consulta',
      loadChildren: () => import('./../consulta/consulta.module').then( m => m.ConsultaPageModule)
    },
    {
      path: 'credito',
      loadChildren: () => import('./../credito/credito.module').then( m => m.CreditoPageModule)
    },
    {
      path: 'credito-otorgado',
      loadChildren: () => import('./../credito-otorgado/credito-otorgado.module').then( m => m.CreditoOtorgadoPageModule)
    },
    {
      path: 'fecha-pago',
      loadChildren: () => import('./../fecha-pago/fecha-pago.module').then( m => m.FechaPagoPageModule)
    },
    {
      path: 'productos',
      loadChildren: () => import('./../productos/productos.module').then( m => m.ProductosPageModule)
    },
    {
      path: 'solicitud',
      loadChildren: () => import('./../solicitud/solicitud.module').then( m => m.SolicitudPageModule)
    },
    {
      path: 'sucursales',
      loadChildren: () => import('./../sucursales/sucursales.module').then( m => m.SucursalesPageModule)
    },
    { path: '**', component: LoginPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternoPageRoutingModule {}
