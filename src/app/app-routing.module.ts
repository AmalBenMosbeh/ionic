import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'add-annonce',
    loadChildren: () => import('./add-annonce/add-annonce.module').then( m => m.AddAnnoncePageModule)
  },
  {
    path: 'mes-annonce',
    loadChildren: () => import('./mes-annonce/mes-annonce.module').then( m => m.MesAnnoncePageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./detail-annonce/detail-annonce.module').then((m) => m.DetailAnnoncePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
