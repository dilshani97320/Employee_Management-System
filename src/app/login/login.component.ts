import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

import { ApiService } from '../shared/api.service';
import { LoginModel } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formValue !:FormGroup;
  LoginModelObj : LoginModel = new LoginModel();
  constructor(private api :ApiService) { }

  ngOnInit(): void {
    this.initForm();
    
  }
initForm(){
  this.formValue = new FormGroup({
username:new FormControl('',[Validators.required]),
password:new FormControl('',[Validators.required]),


  });
}
loginProcess(){
  if(this.formValue.valid){
    this.api.login(this.formValue.value)
    .subscribe(res=>{
      if(res.success){
        alert("success")
      }else{
        alert("fail login")
      }
    });
  }



    


}
}
