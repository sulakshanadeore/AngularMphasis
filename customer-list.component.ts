import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
customers:Customer[]=
[
  {customerno:1,name:'Akshay',address:'a',city:'Pune',state:'MH',country:'India'},
  {customerno:2,name:'Sujay',address:'b',city:'Mumbai',state:'MH',country:'India'},
  {customerno:3,name:'Ajay',address:'c',city:'Bangalore',state:'KA',country:'India'},
  {customerno:4,name:'Vijay',address:'d',city:'Hyderabad',state:'AP',country:'India'},


]

selectedCustomer:Customer=new Customer();

showdetails(customer:Customer)
{
this.selectedCustomer=Object.assign({},customer);
}

add(customer:Customer)
{
this.customers.push(customer);

}


delete(i:number)
{
  this.customers.splice(i,1);

}

update(customer:Customer)
{
  console.log(customer);
  var c=this.customers.find(e=>e.customerno=customer.customerno);
  
    Object.assign(c,customer);
  alert('cust saved');
}


}
