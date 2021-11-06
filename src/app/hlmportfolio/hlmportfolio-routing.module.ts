import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HlmportfolioPage } from './hlmportfolio.page';

const routes: Routes = [
  {
    path: '',
    component: HlmportfolioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HlmportfolioPageRoutingModule {}
