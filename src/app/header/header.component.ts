import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header-service/header.service';
import { Header } from '../models/header/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header: Header = new Header();

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    // Nos suscribimos para recibir los datos de Firestore
    this.headerService.getHeader().valueChanges().subscribe((res: any) => {
      if (res && res.length > 0) {
        this.header = res[0]; // Tomamos el primer documento de la colección
        console.log("¡Datos recibidos con éxito!", this.header);
      }
    });
  }
}
