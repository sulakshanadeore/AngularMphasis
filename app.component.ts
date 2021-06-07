import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondproj';

  uppertitle:string="";
selectedday:string="Monday";
  weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

  isSeatAvailable:boolean=false;
   isHoliday:boolean=false;
todaysdate=new Date();

empval={name:"Anay",age:"23",address: {city:"Mumabi",street:"Some street"}};
// bookSeat(event:any)
// {
//   this.isSeatAvailable=!this.isSeatAvailable;

// //   if(this.isSeatAvailable==false)
// //   {

// //     this.isSeatAvailable=true;
// //   }
// //   else
// // {
// //   this.isSeatAvailable=false;

// // }
//   if(this.isSeatAvailable)
//   alert("Available");
//   else
//   alert("Not available");
// }

  changingday(event:any)
  {
    // this.selectedmonth=event.target.value;
    if(this.selectedday=="Sunday")
    {
    this.isHoliday=true;
  //alert("Its a holiday");
    }
    else{
      this.isHoliday=false;
     // alert("Its not a holiday");

    }
  
  }


  

}
