import { Component } from '@angular/core';
import { CertificatesService } from '../services/certificates-service/certificates';
import { CertificateModel } from '../models/certificates/certificates.model';
import { map } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-certificates',
  standalone: false,
  templateUrl: './certificates.html',
  styleUrl: './certificates.css',
})
export class Certificates {

  certificates: CertificateModel[] = [];
  constructor (public certificatesService : CertificatesService, private cdr: ChangeDetectorRef) {
    console.log(this.certificatesService);
    this.certificatesService.getCertificates().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.certificates = data;
      this.cdr.detectChanges();
      console.log(this.certificates);
    });
  }
}
