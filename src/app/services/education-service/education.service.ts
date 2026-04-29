import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Education } from '../../models/education/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private dbPath = '/education'; 
  eduRef: AngularFirestoreCollection<Education>;

  constructor(private db: AngularFirestore) {
    this.eduRef = db.collection(this.dbPath);
  }

  getEducation(): AngularFirestoreCollection<Education> {
    return this.eduRef;
  }
}
