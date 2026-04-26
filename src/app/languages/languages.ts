import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { LanguagesService } from '../services/languages-service/languages';
import { LanguagesModel } from '../models/languages/languages.model';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-languages',
  standalone: false,
  templateUrl: './languages.html',
  styleUrl: './languages.css',
})
export class Languages {
  languages : LanguagesModel[] = [];

  constructor (public languagesService : LanguagesService, private cdr: ChangeDetectorRef) {
    console.log(this.languagesService);

    this.languagesService.getLanguages().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.languages = data;
      this.cdr.detectChanges();
      console.log(this.languages);
    }); 
  }
}
