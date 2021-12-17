import {Component, OnInit} from '@angular/core';
import {Employee} from "../classes/employee/employee";
import {EmployeeService} from "../services/employee-service/employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfessionConverter} from "../classes/professionConverter";
import {BaseEmployeeComponent} from "../classes/employee/BaseEmployeeComponent";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent extends BaseEmployeeComponent implements OnInit {

  id!: string;
  employee: Employee = new Employee();
  private professionConverter: ProfessionConverter = new ProfessionConverter();

  constructor(private employeeService: EmployeeService, router: Router, private activatedRoute: ActivatedRoute) {
    super(router);
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe({
      next: value => {
        this.employee = value;
      },
      error: err => console.log(err)
    });
  }

  onSubmit = () => {
    this.employee.profession = this.professionConverter.convertToEnum(this.employee.profession);
    this.employeeService.updateEmployee(this.id, this.employee).subscribe({
      next: value => {
        console.log('Updated: ' + value);
        this.router.navigate([`/employees`])
      },
      error: err => console.log(err)
    })
  }

  override onReturn = (): void => {
    super.onReturn();
  }

  onClean = (): void => {
    this.employee = new Employee();
  }

}
