import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HlmeducationPage } from './hlmeducation.page';

const routes: Routes = [
  {
    path: '',
    component: HlmeducationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HlmeducationPageRoutingModule {}
