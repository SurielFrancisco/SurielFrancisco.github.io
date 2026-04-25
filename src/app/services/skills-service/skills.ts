import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { SkillsModel } from '../../models/skills/skills.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {

    accesoSkills = 'skills service running...';

    private dbPath = '/skills';

    skillsRef: AngularFirestoreCollection<SkillsModel>; 

    constructor (private db: AngularFirestore) {
      this.skillsRef = this.db.collection(this.dbPath);
    }

    getSkills(): AngularFirestoreCollection<SkillsModel> {
      return this.skillsRef;
    }
}
