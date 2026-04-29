import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Languajes } from '../../models/languages/languajes.model';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  private dbPath = '/languages'; // Nombre exacto de la colección en Firebase
  langRef: AngularFirestoreCollection<Languajes>;

  constructor(private db: AngularFirestore) {
    this.langRef = db.collection(this.dbPath);
  }

  getLanguajes(): AngularFirestoreCollection<Languajes> {
    return this.langRef;
  }
}
