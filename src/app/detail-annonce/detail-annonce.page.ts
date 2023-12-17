import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../services/annonce.service';
import { AuthService } from '../services/auth.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-detail-annonce',
  templateUrl: './detail-annonce.page.html',
  styleUrls: ['./detail-annonce.page.scss'],
})
export class DetailAnnoncePage implements OnInit {
  selectedAnnonce: any;

  constructor(
    private readonly loadingCtrl: LoadingController,
    private readonly alertCtrl: AlertController,
    private AnnonceService: AnnonceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        let id = p.get('id');
        this.AnnonceService.getAnnonceById(id).subscribe((annonce) => {
          this.selectedAnnonce = annonce[0];
        });
      },
    });
  }

  async presentAlert(id: any) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Etes-vous sûr de vouloir supprimer cette annonce ?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.deleteAnnonce(this.selectedAnnonce.id);
          },
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });
    await alert.present();
  }


  deleteAnnonce(id: any) {
    this.AnnonceService.deleteAnnonce(id).then(() => {
      this.router.navigateByUrl('/home');
        }).catch(error => {
      console.error('Error deleting annonce:', error);
    });
  }
}
