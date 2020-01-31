import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../../services/projects.service';
import {ProjectModel} from '../../../models/projects';
import {DataMapper} from '../../../utils/DataMapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: any[];
  ImgUrl = 'https://tarun-portfolio-api.herokuapp.com/';
  // ImgUrl = 'http://localhost:4200/';

  constructor(private getProjects: ProjectsService) {
    this.getProjects.GetProjects().subscribe(data => {
      this.projects = DataMapper(data);
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
