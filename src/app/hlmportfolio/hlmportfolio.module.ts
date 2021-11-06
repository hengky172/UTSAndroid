import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HlmportfolioPageRoutingModule } from './hlmportfolio-routing.module';

import { HlmportfolioPage } from './hlmportfolio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HlmportfolioPageRoutingModule
  ],
  declarations: [HlmportfolioPage]
})
export class HlmportfolioPageModule {}
