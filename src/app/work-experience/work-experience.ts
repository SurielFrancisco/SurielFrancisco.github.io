import { Component } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience-service/work-experience';
import { WorkExperienceModel } from '../models/work-experience/work-experience.model';
import { map } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  standalone: false,
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.css',
})
export class WorkExperience {

  workExperience: WorkExperienceModel[] = [];

  constructor(public workExperienceService: WorkExperienceService, private cdr: ChangeDetectorRef) {

    console.log(this.workExperienceService);
    this.workExperienceService.getWorkExperience().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.workExperience = data.map((job: any) => ({
        ...job,
        acomplishmentsArray: Array.isArray(job.acomplishments) ? job.acomplishments : (job.acomplishments ? String(job.acomplishments).split(',').map((acc: string) => acc.trim()) : [])
      }));
      this.cdr.detectChanges();
      console.log(this.workExperience);
    });
  }

}
