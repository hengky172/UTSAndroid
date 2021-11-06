import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HlmcontactPageRoutingModule } from './hlmcontact-routing.module';

import { HlmcontactPage } from './hlmcontact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HlmcontactPageRoutingModule
  ],
  declarations: [HlmcontactPage]
})
export class HlmcontactPageModule {}
