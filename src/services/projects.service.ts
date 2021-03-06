import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProjectModel} from '../models/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  ProjectUrl = 'https://tarun-portfolio-api.herokuapp.com/api/projects/show';
  // ProjectUrl = 'http://localhost:4200//api/projects/show';

  GetProjects(): Observable<ProjectModel> {
    return this.http.get<ProjectModel>(`${this.ProjectUrl}`);
  }
}
