import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {
    path: '', // If no path selected. Default
    redirectTo: 'employees', 
    pathMatch: 'full' 
  },
  {
    path: 'employees', // If employee selected. 
    component: EmployeeListComponent
  },
  {
    path: 'employees/add',
    component: CreateEmployeeComponent
  },
  {
    path: 'employees/edit/:id',
    component: UpdateEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }