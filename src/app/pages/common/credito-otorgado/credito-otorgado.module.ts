import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditoOtorgadoPageRoutingModule } from './credito-otorgado-routing.module';

import { CreditoOtorgadoPage } from './credito-otorgado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditoOtorgadoPageRoutingModule
  ],
  declarations: [CreditoOtorgadoPage]
})
export class CreditoOtorgadoPageModule {}
