import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesAnnoncePageRoutingModule } from './mes-annonce-routing.module';

import { MesAnnoncePage } from './mes-annonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesAnnoncePageRoutingModule
  ],
  declarations: [MesAnnoncePage]
})
export class MesAnnoncePageModule {}
