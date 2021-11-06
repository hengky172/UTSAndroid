import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HlmaboutPage } from './hlmabout.page';

const routes: Routes = [
  {
    path: '',
    component: HlmaboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HlmaboutPageRoutingModule {}
