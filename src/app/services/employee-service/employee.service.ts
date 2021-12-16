import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../../classes/employee/employee";
import {PageContent} from "../../classes/employee/pageContent";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl: string = 'http://localhost:8080/api/v1/employees';

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<PageContent> {
    return this.httpClient.get<PageContent>(`${this.baseUrl}`);
  }
}
