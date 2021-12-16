import {Component, OnInit} from '@angular/core';
import {Employee} from "../../classes/employee/employee";
import {Profession} from "../../classes/employee/profession";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Array<Employee> = [];

  constructor() {
  }

  ngOnInit(): void {
    this.employees = [{
      id: 'dfhdhdh',
      first_name: 'Alex',
      last_name: 'Petrov',
      age: 22,
      profession: Profession.SOFTWARE_ENGINEER
    }, {
      id: 'gfhfh',
      first_name: 'Petr',
      last_name: 'Ivanov',
      age: 32,
      profession: Profession.QA
    }];
  }

}
