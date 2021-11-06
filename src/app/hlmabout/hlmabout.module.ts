import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HlmaboutPageRoutingModule } from './hlmabout-routing.module';

import { HlmaboutPage } from './hlmabout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HlmaboutPageRoutingModule
  ],
  declarations: [HlmaboutPage]
})
export class HlmaboutPageModule {}
