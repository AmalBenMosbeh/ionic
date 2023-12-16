import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesAnnoncePage } from './mes-annonce.page';

const routes: Routes = [
  {
    path: '',
    component: MesAnnoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesAnnoncePageRoutingModule {}
