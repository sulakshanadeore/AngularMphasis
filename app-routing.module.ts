import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfoComponent } from './info/info.component';
import { LanguagesComponent } from './languages/languages.component';
import { ProductsComponent } from './products/products.component';
const routes: Routes = [
  {path:'language',component:LanguagesComponent},
  {path:'info',component:InfoComponent},
  {path:'products',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
