import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FechaPagoPageRoutingModule } from './fecha-pago-routing.module';

import { FechaPagoPage } from './fecha-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FechaPagoPageRoutingModule
  ],
  declarations: [FechaPagoPage]
})
export class FechaPagoPageModule {}
