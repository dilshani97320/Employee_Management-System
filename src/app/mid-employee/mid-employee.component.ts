
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { MidEmployeeModel } from './mid-employee.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-mid-employee',
  templateUrl: './mid-employee.component.html',
  styleUrls: ['./mid-employee.component.css']
})
export class MidEmployeeComponent implements OnInit {

  formValue !:FormGroup;
  entryemployeeModelObj : MidEmployeeModel = new MidEmployeeModel();
  entryemployeeData !: any;
  showAdd !:boolean;
  showUpdate !:boolean;

  constructor(private formbuilder:FormBuilder,private api :ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName : [''],
      lastName :[''],
      email:[''],
      mobile:[''],
      salary:['']
    })
    this.getAllEmployee();
   
  }
clickAddEmployee(){
  this.formValue.reset();
  this.showAdd=true;
  this.showUpdate=false;
}

postEmployeeDetails(){
  this.entryemployeeModelObj.firstName=this.formValue.value.firstName;
  this.entryemployeeModelObj.lastName=this.formValue.value.lastName;
  this.entryemployeeModelObj.email=this.formValue.value.email;
  this.entryemployeeModelObj.mobile=this.formValue.value.mobile;
  this.entryemployeeModelObj.salary=this.formValue.value.salary;

this.api.postMidEmployee(this.entryemployeeModelObj)
.subscribe(res=>{
  console.log(res);
  alert("Employee added successfully");
  let ref =document.getElementById('cancel')
  ref?.click();
  this.formValue.reset;
  this.getAllEmployee()
},
err=>{
  alert("something went wrong");
}
)

  }
  getAllEmployee(){
    this.api.getMidEmployee()
    .subscribe(res=>{
      this.entryemployeeData =res;
    })
  }

  deleteEmployeerow(row : any)
  {
    this.api.deleteMidEmployee(row.id)
    .subscribe(res=>{
    
      alert("Employee Deteled");
      this.getAllEmployee();
    })
  }

  onEdit(row :any){
    this.showAdd=false;
    this.showUpdate=true;

    this.entryemployeeModelObj.id=row.id;
    this.formValue.controls['firstName'].setValue(row.firstName)
    this.formValue.controls['lastName'].setValue(row.lastName)
    this.formValue.controls['email'].setValue(row.email)
    this.formValue.controls['mobile'].setValue(row.mobile)
    this.formValue.controls['salary'].setValue(row.salary)
    
  }
  updateEmployeeDetails(){
    
    this.entryemployeeModelObj.firstName=this.formValue.value.firstName;
  this.entryemployeeModelObj.lastName=this.formValue.value.lastName;
  this.entryemployeeModelObj.email=this.formValue.value.email;
  this.entryemployeeModelObj.mobile=this.formValue.value.mobile;
  this.entryemployeeModelObj.salary=this.formValue.value.salary;

  this.api.updateMidEmployee(this.entryemployeeModelObj,this.entryemployeeModelObj.id)
  .subscribe(res=>{
    
    alert("Updated Successfully");
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset;
    this.getAllEmployee();
  })
  }
}
