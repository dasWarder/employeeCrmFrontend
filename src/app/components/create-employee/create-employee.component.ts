import {Component, OnInit} from '@angular/core';
import {Employee} from "../../classes/employee/employee";
import {EmployeeService} from "../../services/employee-service/employee.service";
import {Router} from "@angular/router";
import {ProfessionConverter} from "../../classes/professionConverter";
import {BaseEmployeeComponent} from "../../classes/employee/BaseEmployeeComponent";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent extends BaseEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  private professionConverter: ProfessionConverter = new ProfessionConverter();

  constructor(private employeeService: EmployeeService, router: Router) {
    super(router);
  }

  ngOnInit(): void {
  }

  onSubmit = () => {
    this.employee.profession = this.professionConverter.convertToEnum(this.employee.profession);
    this.createEmployee();
  }

  private createEmployee = (): void => {
    this.employeeService.createEmployee(this.employee).subscribe({
      next: value => {
        console.log('Created: ' + value);
        this.onReturn();
      },
      error: err => console.error(err)
    });
  }

  override onReturn = (): void => {
    super.onReturn();
  }

  onClean = (): void => {
    this.employee = new Employee();
  }

}
