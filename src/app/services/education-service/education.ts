import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { EducationModel } from '../../models/education/education.model';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  accesoEducationService = "work experience service running...";

  private dbPath = '/education';

  educationRef: AngularFirestoreCollection<EducationModel>;

  constructor(private db: AngularFirestore) { 
    this.educationRef = db.collection(this.dbPath);
  }

  getEducation(): AngularFirestoreCollection<EducationModel> {
    return this.educationRef;
  }

}
