import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'hlmabout',
    loadChildren: () => import('./hlmabout/hlmabout.module').then( m => m.HlmaboutPageModule)
  },
  {
    path: 'hlmeducation',
    loadChildren: () => import('./hlmeducation/hlmeducation.module').then( m => m.HlmeducationPageModule)
  },
  {
    path: 'hlmportfolio',
    loadChildren: () => import('./hlmportfolio/hlmportfolio.module').then( m => m.HlmportfolioPageModule)
  },
  {
    path: 'hlmcontact',
    loadChildren: () => import('./hlmcontact/hlmcontact.module').then( m => m.HlmcontactPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
