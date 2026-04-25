import { Component } from '@angular/core';
import { SkillsService } from '../services/skills-service/skills';
import { SkillsModel } from '../models/skills/skills.model';
import { map } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';
 
@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills: SkillsModel[] = [];

  constructor (public skillsService : SkillsService, private cdr: ChangeDetectorRef ) {
    console.log(this.skillsService);

    this.skillsService.getSkills().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.skills = data;
      this.cdr.detectChanges();
      console.log(this.skills);
    });
  }
}
