import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../services/annonce.service';
import { AuthService } from '../services/auth.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.page.html',
  styleUrls: ['./add-annonce.page.scss'],
})
export class AddAnnoncePage implements OnInit {
  addAnnonce: FormGroup;
  constructor(
    private readonly loadingCtrl: LoadingController,
    private readonly alertCtrl: AlertController,
    private AnnonceService: AnnonceService,
    private auth: Auth,
    formBuilder: FormBuilder,
    private router: Router
  ) {
    this.addAnnonce = formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      prix: ['', Validators.required],
      categorie: ['', Validators.required],
    });
  }

  async createAnnonce() {
    const loading = await this.loadingCtrl.create();

    const title = this.addAnnonce.value.title;
    const description = this.addAnnonce.value.description;
    const prix = this.addAnnonce.value.prix;
    const categorie = this.addAnnonce.value.categorie;
    const userId = this.auth.currentUser?.uid;

    this.AnnonceService.createAnnonce(
      title,
      description,
      categorie,
      prix,
      userId
    ).then(
      () => {
        loading.dismiss().then(() => {
          this.router.navigateByUrl('home');
        });
      },
      (error) => {
        loading.dismiss().then(() => {
          console.error(error);
        });
      }
    );
    return await loading.present();
  }

  ngOnInit() {
    console.log(this.auth.currentUser);
  }
}
