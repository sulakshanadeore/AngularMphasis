import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

onsubmitClick(data:any)
{
  var p=new LoginModel();
  p.SetLoginId=data.loginid;
  //alert(data.loginid);
  p.SetLoginPwd=data.loginpwd;

if (p.GetLoginId=="abc@gmail.com" && p.GetLoginPwd=="abc@123") {
  alert("Welcome");
}
else  
{
alert("Check it");

}

}

}

export  class LoginModel
{
private _loginid:string="";
private _loginpwd:string="";

public set SetLoginId(_id:string)
{
  this._loginid=_id;
}

public get GetLoginId():string
{
  return this._loginid;
}


public set SetLoginPwd(_pwd:string)
{
  this._loginpwd=_pwd;
}

public get GetLoginPwd():string
{
  return this._loginpwd;
}




}