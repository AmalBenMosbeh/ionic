import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AnnonceService } from '../services/annonce.service';
import { Router } from '@angular/router';
import { Annonce } from '../models/annonce.interface';

import {
  AlertController,
  IonModal,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  annonceList: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private AnnonceService: AnnonceService
  ) {}

  ngOnInit() {
    return (this.annonceList = this.AnnonceService.getAnnonceList());
  }

  async logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}
