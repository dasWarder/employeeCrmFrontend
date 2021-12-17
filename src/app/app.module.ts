import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { HeaderBannerComponent } from './components/header-banner/header-banner.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    EmployeeDetailsComponent,
    HeaderBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
