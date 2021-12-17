import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./components/create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./update-employee/update-employee.component";
import {EmployeeDetailsComponent} from "./components/employee-details/employee-details.component";
import {DeleteEmployeeComponent} from "./components/delete-employee/delete-employee.component";

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'receive/:id', component: EmployeeDetailsComponent },
  { path: 'remove/:id', component: DeleteEmployeeComponent },
  { path: '', redirectTo: 'employees', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
