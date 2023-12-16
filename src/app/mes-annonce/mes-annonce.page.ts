import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AnnonceService } from '../services/annonce.service';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-mes-annonce',
  templateUrl: './mes-annonce.page.html',
  styleUrls: ['./mes-annonce.page.scss'],
})
export class MesAnnoncePage implements OnInit {
  mesAnnonceList: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private AnnonceService: AnnonceService,
    private auth: Auth,
  ) {}

  ngOnInit() {
    const currentUserUid = this.auth.currentUser?.uid;
    if (currentUserUid) {
      this.mesAnnonceList = this.AnnonceService.getMyAnnonceList(currentUserUid);
    }  
    return this.mesAnnonceList;
  }

  async logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

}
