import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeelistComponent, EmployeeListTableComponent } from './employeelist';
// import { EmployeeListTableComponent } from './employee-list-table';
import { EmployeeService } from './employee.service';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ],
  declarations: [
    EmployeelistComponent,
    EmployeeListTableComponent
  ],
  providers: [EmployeeService]
})
export class EmployeesModule { }
