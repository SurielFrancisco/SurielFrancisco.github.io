import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { LanguagesModel } from '../../models/languages/languages.model';

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  
  accesoLanguages = "Languages service running...";

  private dbPath = '/languages';

  languagesRef: AngularFirestoreCollection<LanguagesModel>;

  constructor(private db: AngularFirestore) { 
    this.languagesRef = db.collection(this.dbPath);
  }

  getLanguages(): AngularFirestoreCollection<LanguagesModel> {
    return this.languagesRef;
  }

}
