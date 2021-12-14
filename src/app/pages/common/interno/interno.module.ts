import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InternoPageRoutingModule } from './interno-routing.module';

import { InternoPage } from './interno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InternoPageRoutingModule
  ],
  declarations: [InternoPage]
})
export class InternoPageModule {}
