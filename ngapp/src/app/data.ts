import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill, Project } from './models';

@Injectable({ providedIn: 'root' })
export class DataService {
  private http = inject(HttpClient);

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>('skills.json');
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('projects/projects.json');
  }
}
