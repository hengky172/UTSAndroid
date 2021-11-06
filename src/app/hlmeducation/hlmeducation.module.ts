import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HlmeducationPageRoutingModule } from './hlmeducation-routing.module';

import { HlmeducationPage } from './hlmeducation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HlmeducationPageRoutingModule
  ],
  declarations: [HlmeducationPage]
})
export class HlmeducationPageModule {}
