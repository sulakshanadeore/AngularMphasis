export class Student
{
    private rollNo:number=0;
    private studname:string="";
    private birthyear:number=0;


public get GetStudRollNo():number
{
    return this.rollNo;
}

public set SetStudRollNo(rno:number)
{
this.rollNo=rno;
}


public get GetStudName():string
{
    return this.studname;
}

public set SetStudName(sname:string)
{
this.studname=sname;
}

public set SetBirthYear(yr:number)
{
this.birthyear=yr;
}

CalculateAge():number{
    var d = new Date();
    var y:number=d.getFullYear();
    return y-this.birthyear;

}





}