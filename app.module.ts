import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { ProductsComponent } from './products/products.component';
import { MyProductsServiceService } from './my-products-service.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [MyProductsServiceService],
  bootstrap: [ProductsComponent]
})
export class AppModule { }
