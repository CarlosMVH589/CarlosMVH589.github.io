import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience-service/work-experience.service';
import { WorkExperience } from '../models/work-experience/work-experience.model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workList: WorkExperience[] = [];

  constructor(private workService: WorkExperienceService) { }

  ngOnInit(): void {
    this.workService.getWorkExperience().valueChanges().subscribe((res: WorkExperience[]) => {
      this.workList = res;
      console.log("Datos de experiencia recibidos:", this.workList);
    });
  }
}
