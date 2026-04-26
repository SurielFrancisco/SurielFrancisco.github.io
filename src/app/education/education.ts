import { Component } from '@angular/core';
import { EducationService } from '../services/education-service/education';
import { EducationModel } from '../models/education/education.model';
import { map } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  education: EducationModel[] = [];

  constructor (public educationService : EducationService, private cdr: ChangeDetectorRef ) {
    console.log(this.educationService);

    this.educationService.getEducation().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.education = data;
      this.cdr.detectChanges();
      console.log(this.education);
    });
  }
}
