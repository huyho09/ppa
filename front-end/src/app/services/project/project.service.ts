import { Injectable } from '@angular/core';
import { CreateProjectRequest } from '../../models/requests/project/create-project.request';
import { Observable } from 'rxjs';
import { SettingService } from '../common/setting.service';
import { Project } from 'src/app/dtos/project.dto';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private settingService: SettingService) { }

  createProject(project: CreateProjectRequest): Observable<any> {
    return this.settingService.postApi("Project", "create-new-project", project);
  }
}
