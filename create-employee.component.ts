import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee=new Employee();

  constructor(private service:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.service.createEmployee(this.employee).subscribe(data=>{
      this.gotoEmployeeList();
    })
  }

  gotoEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    this.saveEmployee();
  }
}