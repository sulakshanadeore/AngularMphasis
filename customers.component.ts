import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Custdata } from '../custdata';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  


  constructor() { }

  ngOnInit(): void {
  }

onsubmit(data:any)
{
  console.log(data);
}

}
