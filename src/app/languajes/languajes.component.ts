import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../services/languages-service/languages.service';
import { Languajes } from '../models/languages/languajes.model';

@Component({
  selector: 'app-languajes',
  templateUrl: './languajes.component.html',
  styleUrls: ['./languajes.component.css']
})
export class LanguajesComponent implements OnInit {

  languagesList: Languajes[] = [];

  constructor(private langService: LanguagesService) { }

  ngOnInit(): void {
    this.langService.getLanguajes().valueChanges().subscribe((res: Languajes[]) => {
      this.languagesList = res;
      console.log("Datos de idiomas cargados:", this.languagesList);
    });
  }
}
