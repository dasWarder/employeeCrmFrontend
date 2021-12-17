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

  getEmployeesList = (): Observable<PageContent> => {
    return this.httpClient.get<PageContent>(`${this.baseUrl}`);
  }

  createEmployee = (employee: Employee): Observable<Employee> => {
    return this.httpClient.post<Employee>(`${this.baseUrl}`, employee);
  }

  getEmployeeById = (id: string) : Observable<Employee> => {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee = (id: string, employee: Employee) : Observable<Employee> => {
    return this.httpClient.put<Employee>(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee = (id: string) : Observable<any> => {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
