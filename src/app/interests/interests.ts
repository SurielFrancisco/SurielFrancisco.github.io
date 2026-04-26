import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { InterestsService } from '../services/interests-service/interests';
import { InterestsModel } from '../models/interests/interests.model';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-interests',
  standalone: false,
  templateUrl: './interests.html',
  styleUrl: './interests.css',
})
export class Interests {
  interests: InterestsModel[] = [];

  constructor(public interestsService: InterestsService, private cdr: ChangeDetectorRef) {
    console.log(this.interestsService);

    this.interestsService.getInterests().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.interests = data;
      this.cdr.detectChanges();
      console.log(this.interests);
    }); 
  } 
}
