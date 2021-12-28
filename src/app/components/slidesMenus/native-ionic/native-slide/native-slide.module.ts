import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MainPageRoutingModule } from 'src/app/components/slidesMenus/native-ionic/main/main-routing.module';
import { NativeSlideComponent } from './native-slide.component';
import { MainPageModule } from 'src/app/components/slidesMenus/native-ionic/main/main.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageModule,
    MainPageRoutingModule
  ],
  declarations: [NativeSlideComponent],
  exports: [NativeSlideComponent]
})
export class NativeSlideModule { }
