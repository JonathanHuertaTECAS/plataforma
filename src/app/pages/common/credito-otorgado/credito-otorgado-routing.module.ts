import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditoOtorgadoPage } from './credito-otorgado.page';

const routes: Routes = [
  {
    path: '',
    component: CreditoOtorgadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditoOtorgadoPageRoutingModule {}
