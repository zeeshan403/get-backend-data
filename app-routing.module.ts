import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './com/create-employee/create-employee.component';
import { EmployeeListComponent } from './com/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './com/update-employee/update-employee.component';

const routes: Routes = [
  {path:'employees',component:EmployeeListComponent},
  {path:'create-employee',component:CreateEmployeeComponent},
  {path:'update-employee/:id',component:UpdateEmployeeComponent},
  {path:'',redirectTo:'employees',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
