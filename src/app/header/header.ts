import { Component } from '@angular/core';
import { HeaderService } from '../services/header-service/header';
import { HeaderModel } from '../models/header/header.model';
import { map } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  header: HeaderModel = new HeaderModel();
  constructor(public headerService: HeaderService, private cdr: ChangeDetectorRef){
    
    this.headerService.getHeader().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.header = data[0];
      this.cdr.detectChanges();
      console.log(this.header);
    });
  }
}