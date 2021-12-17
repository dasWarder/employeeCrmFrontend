import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../services/employee-service/employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../../classes/employee/employee";
import {ProfessionConverter} from "../../classes/professionConverter";
import {BaseEmployeeComponent} from "../../classes/employee/BaseEmployeeComponent";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent extends BaseEmployeeComponent implements OnInit {

  id!: string;
  employee: Employee = new Employee();
  private converter: ProfessionConverter = new ProfessionConverter();

  constructor(private employeeService: EmployeeService, router: Router, private activatedRoute: ActivatedRoute) {
    super(router);
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getEmployeeById(this.id);
  }

  private getEmployeeById = (id: string): void => {
    this.employeeService.getEmployeeById(id).subscribe({
      next: value => {
        value.profession = this.converter.convertFromEnumToString(value.profession);
        this.employee = value
      },
      error: err => console.error(err)
    });
  }

  override onReturn = () => {
    super.onReturn();
  }

}
