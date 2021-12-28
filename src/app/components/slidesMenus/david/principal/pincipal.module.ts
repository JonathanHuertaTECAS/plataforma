import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalComponent } from './principal.component';
import { LateralComponent } from '../menu-lateral/lateral.component';
import { MenuComponent } from '../menu/menu.component';
import { PrincipalRoutingModule } from './principal-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalRoutingModule
  ],
  declarations: [
      PrincipalComponent,
      LateralComponent,
      MenuComponent
    ],
    providers: [],

})
export class PrincipalModule {}
