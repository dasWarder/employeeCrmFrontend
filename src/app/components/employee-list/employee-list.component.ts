import {Component, OnInit} from '@angular/core';
import {Employee} from "../../classes/employee/employee";
import {EmployeeService} from "../../services/employee-service/employee.service";
import {Router} from "@angular/router";
import {ProfessionConverter} from "../../classes/professionConverter";
import {BaseEmployeeComponent} from "../../classes/employee/BaseEmployeeComponent";


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees!: Array<Employee>;
  private converter: ProfessionConverter = new ProfessionConverter();

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees = () => {
    this.employeeService.getEmployeesList().subscribe(data => {

      console.log('Fetch employees');
      let content: Array<Employee> = data.content;

      this.castProfession(content);
      this.employees = content;
    });
  };

  updateEmployee = (id: string): void => {
    this.routeByClick('update', id);
  }

  getEmployee = (id: string): void => {
    this.routeByClick('receive', id);
  }

  deleteEmployee = (id: string): void => {
    this.employeeService.deleteEmployee(id).subscribe({
      next: value => console.log(value),
      error: err => console.error(err),
      complete: () => location.reload()
    });
  }

  private routeByClick = (path: string, id: string): void => {
    this.router.navigate([`${path}`, id]).catch(error => console.log(error));
  }

  private castProfession = (content: Array<Employee>): void => {

    content.forEach(e => {
      let professionName: string | null = e.profession;
      e.profession = this.converter.convertFromEnumToString(professionName);
    });
  }

}
