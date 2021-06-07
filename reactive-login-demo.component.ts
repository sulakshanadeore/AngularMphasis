import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginModel } from '../login/login.component';

@Component({
  selector: 'app-reactive-login-demo',
  templateUrl: './reactive-login-demo.component.html',
  styleUrls: ['./reactive-login-demo.component.css']
})
export class ReactiveLoginDemoComponent implements OnInit {
userformdata:any;
  constructor() { }

  ngOnInit(): void {
this.userformdata=new FormGroup({
emailid:new FormControl(),
passwd:new FormControl()

});

  }


  onsubmitClick(data:any)
{
  var p=new LoginModel();
  // alert(data.emailid);
  // alert(data.passwd);
  p.SetLoginId=data.emailid;
  //alert(data.loginid);
  p.SetLoginPwd=data.passwd;

if (p.GetLoginId=="abc@gmail.com" && p.GetLoginPwd=="abc@123") {
  alert("Welcome");
}
else  
{
alert("Check it");

}

}




}
