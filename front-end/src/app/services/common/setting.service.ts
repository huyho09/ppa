import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import appsettingsData from '../../appsettings.json';
import { Configuration, ApiSetting, Resource, Action } from '../../models/common/configuration';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  readonly appConfig: Configuration = appsettingsData;
  readonly appsetting: ApiSetting = this.appConfig.ApiSettings;
  constructor(private http: HttpClient) { }

  buildApiUrl(resourceId: string, actionId: string, queryParams?: Record<string, string>): string {
    // Explicitly define the types for 'r' and 'a'
    console.log(this.appsetting);
    const resource = this.appsetting.Resources?.find((r: Resource) => r.Id === resourceId);
    if (!resource) throw new Error(`Resource with ID '${resourceId}' not found.`);

    const action = resource.Actions?.find((a: Action) => a.Id === actionId); // define action as having 'Id' of type string
    if (!action) throw new Error(`Action with ID '${actionId}' not found for resource '${resourceId}'.`);

    let url = `${this.appsetting.BaseUrl}/${resource.Route}/${action.Route}`;

    if (queryParams) {
      const queryString = new URLSearchParams(queryParams).toString();
      url += `?${queryString}`;
    }

    return url;
  }

  postApi<T>(resourceId: string, actionId: string, payload?: T, headers?: HttpHeaders): Observable<T> {
    const apiUrl = this.buildApiUrl(resourceId, actionId);
    
    // Set headers if provided, otherwise use default
    const httpHeaders = headers || new HttpHeaders({ 'Content-Type': 'application/json' });

    // Make the POST request
    return this.http.post<T>('http://localhost:4000/project/create', payload);
  }
}
