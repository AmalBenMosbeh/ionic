import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
  query,
  where,
} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})
export class AnnonceService {
  constructor(private readonly firestore: Firestore) {}

  createAnnonce(
    title: string,
    description: string,
    categorie: string,
    prix: string,
    userId: any
  ) {
    return addDoc(collection(this.firestore, 'annonce'), {
      title,
      description,
      categorie,
      prix,
      userId,
    });
  }
  //importer toutes les annonces
  getAnnonceList() {
    const annonces = collectionData(collection(this.firestore, 'annonce'), {});
    return annonces;
  }
  //importer les annonces de l'utilisateur connecté
  getMyAnnonceList(currentUser: string) {
    const q = query(collection(this.firestore, 'annonce'), where('userId', '==', currentUser));
    const myAnnonces = collectionData(q, {});
    return myAnnonces;
  }
}
