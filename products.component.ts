import { Component, OnInit } from '@angular/core';

import { MyProductsServiceService } from '../my-products-service.service';
import { ProductData } from '../product-data';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  

   prod:ProductData[]=[];
  
  ngOnInit(): void {
    //this.showProductsList();

  
  }
  constructor(private p_ser:MyProductsServiceService)
  {
    p_ser=new MyProductsServiceService();


  }

  showProductsList(){
this.prod=this.p_ser.getProducts();
console.log(this.prod);

  }


}
