import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { InterestsModel } from '../../models/interests/interests.model';

@Injectable({
  providedIn: 'root',
})
export class InterestsService {
  
  accesoInterests = "Interests service running...";

  private dbPath = '/interests';

  interestsRef: AngularFirestoreCollection<InterestsModel>;
  
  constructor(private db: AngularFirestore) { 
    this.interestsRef = db.collection(this.dbPath);
  }

  getInterests(): AngularFirestoreCollection<InterestsModel> {
    return this.interestsRef;
  }

}
