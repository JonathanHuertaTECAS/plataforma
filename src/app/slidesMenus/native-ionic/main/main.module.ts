import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { MycreditComponent } from 'src/app/pages/mycredit/mycredit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule
  ],
  declarations: [MainPage,HomeComponent,MycreditComponent],
  exports: [MainPage]
})
export class MainPageModule {}
