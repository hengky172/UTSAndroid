import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HlmcontactPage } from './hlmcontact.page';

const routes: Routes = [
  {
    path: '',
    component: HlmcontactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HlmcontactPageRoutingModule {}
