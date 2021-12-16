import {Component, OnInit} from '@angular/core';
import {Employee} from "../../classes/employee/employee";
import {EmployeeService} from "../../services/employee-service/employee.service";


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees!: Array<Employee>;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees = () => {
    this.employeeService.getEmployeesList().subscribe(data => {
       this.employees = data.content;
    })
  }

}
