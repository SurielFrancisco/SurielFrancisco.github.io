import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { WorkExperienceModel } from '../../models/work-experience/work-experience.model';

@Injectable({
  providedIn: 'root',
})
export class WorkExperienceService {

  accesoWorkExperience = 'work experience service running...';

  private dbPath = '/work-experience';

  workExperienceRef: AngularFirestoreCollection<WorkExperienceModel>;

  constructor(private db: AngularFirestore) {
    this.workExperienceRef = this.db.collection(this.dbPath);
  }

  getWorkExperience(): AngularFirestoreCollection<WorkExperienceModel> {
    return this.workExperienceRef;
  }
}
