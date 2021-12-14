import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FechaPagoPage } from './fecha-pago.page';

const routes: Routes = [
  {
    path: '',
    component: FechaPagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FechaPagoPageRoutingModule {}
