import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  query,
  where,
  DocumentReference
} from '@angular/fire/firestore';
import { Annonce } from '../models/annonce.interface';

@Injectable({
  providedIn: 'root',
})
export class AnnonceService {
  constructor(private firestore: Firestore) {}

  createAnnonce(
    id:string,
    title: string,
    description: string,
    categorie: string,
    prix: string,
    userId: any
  ) {
    return addDoc(collection(this.firestore, 'annonce'), {
      id,
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
    console.log(annonces);
    return annonces;
  }
  //importer les annonces de l'utilisateur connecté
  getMyAnnonceList(currentUser: string) {
    const q = query(collection(this.firestore, 'annonce'), where('userId', '==', currentUser));
    const myAnnonces = collectionData(q);
    return myAnnonces;
  }
  getAnnonceById(id: any) {
    const q = query(collection(this.firestore, 'annonce'), where('id', '==', id));
    return collectionData(q);
  }
  
  getAnnonceByTitle(title: any) {
    const q = query(collection(this.firestore, 'annonce'), where('title', '==', title));
    return collectionData(q);
  }
  
  // Supprimer une annonce par ID
  async deleteAnnonce(id: any) {
    const annonceRef = doc(this.firestore, 'annonce', id);
    await deleteDoc(annonceRef);
  }
  getAnnonceByCathegorie(categorie : any){
    const q = query(collection(this.firestore, 'annonce'), where('categorie', '==', categorie));
    return collectionData(q);  }
}

