import { Injectable } from '@angular/core';
import { ProductData } from './product-data';

@Injectable({
  providedIn: 'root'
})
export class MyProductsServiceService {

  constructor() { }

  p1:ProductData =new ProductData(1,"Tea",10);
  p2:ProductData =new ProductData(2,"Horlics",20);
  p3:ProductData =new ProductData(3,"Borunvita",30);
   p4:ProductData =new ProductData(4,"Milk",40);
   p5:ProductData =new ProductData(5,"Coffee",50);

 public getProducts()
 {
let productsarr:ProductData[];
productsarr=[this.p1,this.p2,this.p3,this.p4,this.p5];

return productsarr;
 }

}
