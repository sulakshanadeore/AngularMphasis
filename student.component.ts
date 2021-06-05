import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from 'src/Models/Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  rollno:number=0;
  studname:string="";
  birthyear:number=1997;
  age:number=0
  details:string="";


  constructor() { 


  }

  ngOnInit(): void {

  }

AcceptDetails(event:any)
{
  var stud=new Student(); 
stud.SetStudRollNo=this.rollno;
stud.SetStudName=this.studname;
stud.SetBirthYear=this.birthyear;
this.age=stud.CalculateAge();
console.log(stud.GetStudRollNo);
console.log(stud.GetStudName);


}


Display(event:any)
{

this.details=this.rollno + " "  +  this .studname + this.age;



}

}
