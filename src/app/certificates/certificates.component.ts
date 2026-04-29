import { Component, OnInit } from '@angular/core';
import { CertificatesService } from '../services/certificates-service/certificates.service';
import { Certificates } from '../models/certificates/certificates.model';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  certsList: Certificates[] = [];

  constructor(private certService: CertificatesService) { }

  ngOnInit(): void {
    this.certService.getCertificates().valueChanges().subscribe((res: Certificates[]) => {
      this.certsList = res;
      console.log("Certificados cargados:", this.certsList);
    });
  }
}
