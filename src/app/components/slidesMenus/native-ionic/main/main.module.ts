import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { MycreditComponent } from 'src/app/pages/mycredit/mycredit.component';
import { SucursalComponent } from 'src/app/pages/sucursal/sucursal.component';
import { PaymentDateComponent } from 'src/app/pages/payment-date/payment-date.component';
import { MatModule } from 'src/matmodule/matmodules';
import { ContractComponent } from 'src/app/pages/contract/contract.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    MatModule
  ],
  declarations: [MainPage,HomeComponent,MycreditComponent,SucursalComponent,PaymentDateComponent, ContractComponent ,ProfileComponent],
  exports: [MainPage]
})
export class MainPageModule {}
