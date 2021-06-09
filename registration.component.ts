import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormGroup } from '@angular/forms';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model: any = {};
  name:string="";
  submitted:boolean=false;
//   fname:string="a";
// lname:string="";
// emailid:string="";
// pwd:string="";
// cpwd:string="";
password1:any;
password2:any;
gender=['Male','Female','Others'];

  constructor() {
   
   }

  ngOnInit(): void {
  }


  onSubmit()
  {

    this.submitted=true;
   this.ValidateRegistration();
  }

ValidateRegistration()
{
var reg=new RegData();
reg.SetFirstName=this.model.name;
reg.SetLastName=this.model.lname;
reg.SetPass=this.model.password1;
reg.SetConfirmPwd=this.model.password2;
reg.SetEmail=this.model.emailid;
alert(reg.GetFirstName);

console.log(reg.GetFirstName);

}

}


export class RegData
{
private  _firstname:string="";

public set SetFirstName(_fstname:string)
{

  this._firstname=_fstname;
}

public get GetFirstName():string{
  return  this._firstname;
}







private  _lastname:string="";

public set SetLastName(_lstname:string)
{

  this._lastname=_lstname;
}

public get GetLasttName():string{
  return  this._lastname;
}




private  _email:string="";

public set SetEmail(_eml:string)
{

  this._email=_eml;
}

public get GetEmail():string{
  return  this._email;
}


private  _pwd:string="";

public set SetPass(_p:string)
{

  this._pwd=_p;
}

public get GetPass():string{
  return  this._pwd;
}

private  _con_pwd:string="";
public set SetConfirmPwd(_cpwd:string)
{

  this._con_pwd=_cpwd;
}

public get GetConfirmPassword():string{
  return  this._con_pwd;
}


}
